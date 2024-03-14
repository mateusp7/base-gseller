"use client";

import { useDebounce } from "@/app/hooks/debounce";
import { graphqlRequestClient } from "@/lib/graphql.request";
import { SearchSchema } from "@/lib/schemas/search-schema";
import { AssetItem } from "@/lib/types/asset-image.type";
import { SearchData } from "@/lib/types/search.type";
import { createQueryString } from "@/utils/create-query-string";
import { SortOrder, useGetAssetListQuery } from "@/utils/generated/graphql";
import { quantitiyPerPage } from "@/utils/objects-data/quantity-per-page";
import { validyExtension, validyFilesKb } from "@/utils/send-image-validations";
import { gql, useMutation } from "@apollo/client";
import { Button } from "@gseller-monorepo/button";
import { Input } from "@gseller-monorepo/input";
import { Modal } from "@gseller-monorepo/modal";
import { PaginationButtons } from "@gseller-monorepo/pagination";
import { Select } from "@gseller-monorepo/select";
import { toast } from "@gseller-monorepo/toast";
import { UploadImage } from "@gseller-monorepo/upload-image";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, CheckCircle, ImageIcon, Trash } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, Dispatch, SetStateAction, forwardRef } from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { FormControl, FormField, FormItem } from "./ui/form";

export interface PhotoTableProps {
  openModal: boolean;
  listImagesSelected: AssetItem[];
  isMultiple?: boolean;
  setListImagesSelected: Dispatch<SetStateAction<AssetItem[]>>;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const CREATE_ASSETS_MUTATION = gql`
  mutation CreateAssets($file: Upload!, $tags: [String!], $customFields: JSON) {
    createAssets(
      input: { file: $file, tags: $tags, customFields: $customFields }
    ) {
      __typename
      ... on Asset {
        id
      }
      ... on ErrorResult {
        errorCode
        message
      }
      ... on MimeTypeError {
        errorCode
        message
      }
      ... on Node {
        id
      }
    }
  }
`;

const PhotoTable = forwardRef<HTMLDivElement, PhotoTableProps>(
  (
    {
      openModal,
      listImagesSelected,
      isMultiple = true,
      setListImagesSelected,
      setIsOpenModal,
      ...props
    },
    ref
  ) => {
    const router = useRouter();
    const pathname = usePathname();
    const requestClient = graphqlRequestClient();
    const searchParams = useSearchParams();

    const form = useForm<SearchData>({
      resolver: zodResolver(SearchSchema),
      defaultValues: {
        search: "",
      },
    });

    const perPage = searchParams.get("per_page") ?? "14";
    const page = searchParams.get("page") ?? "1";
    const searchValue = form.watch("search");

    const {
      data: assetList,
      loading: isLoadindAssetList,
      refetch: refetchListImages,
    } = useGetAssetListQuery({
      context: requestClient,
      variables: {
        options: {
          sort: { createdAt: SortOrder.Desc },
          skip: Number(page) * 10 - 10,
          take: Number(perPage),
          filter: {
            name: {
              contains: useDebounce(searchValue),
            },
          },
        },
      },
    });

    const [createAssets, { loading: isLoadingCreateAsset }] = useMutation(
      CREATE_ASSETS_MUTATION,
      {
        onCompleted: () => {
          refetchListImages();
        },
      }
    );

    const findInSelectedRows = (asset: AssetItem) => {
      return listImagesSelected.some((image) => image?.id === asset.id);
    };

    const handleSelectPhtoOrVideo = (asset: AssetItem) => {
      if (isMultiple) {
        const existInListImages = findInSelectedRows(asset);
        if (existInListImages) {
          const newListFiltered = listImagesSelected.filter(
            (image) => image.id !== asset.id
          );
          return setListImagesSelected(newListFiltered);
        }
        return setListImagesSelected((prev) => [...prev, asset]);
      }
      setListImagesSelected([asset]);
    };

    const handleConfirmSelection = () => {
      setIsOpenModal(false);
    };

    const handleChangeQuantityPerPage = (quantityPerPage: string) => {
      router.push(
        `${pathname}?${createQueryString({
          page,
          per_page: quantityPerPage,
        })}`
      );
    };

    const handleClearImagesSelected = () => {
      setListImagesSelected([]);
    };

    const handleSelectImages = async (event: ChangeEvent<HTMLInputElement>) => {
      const { target } = event;

      if (!target.files) return;

      const allowedExtensions = ["image/png", "image/jpg", "image/jpeg"];

      const hasImagesDontAllowedExtensions = validyExtension({
        target,
        allowedExtensions,
      });

      if (
        hasImagesDontAllowedExtensions.dontAllowedAssets?.length ===
        Array.from(target.files).length
      ) {
        toast.info("Formato(s) de imagens não aceitos", {
          description: `Por favor, envie uma imagem no formato ${allowedExtensions
            .join(",")
            .replaceAll("image/", "")}`,
        });
        return (target.value = "");
      }

      const hasImagesDontAllowedKb = validyFilesKb(
        hasImagesDontAllowedExtensions.allowedAssets,
        1010
      );

      if (
        hasImagesDontAllowedKb?.dontAllowedAssets.length ===
        hasImagesDontAllowedExtensions.allowedAssets.length
      ) {
        toast.info("Tamanho não aceito para as imagens enviadas", {
          description: `Por favor, envie uma imagem no formato com no máximo 1010Kb`,
        });
        return (target.value = "");
      }

      const promises = hasImagesDontAllowedKb?.allowedAssets?.map(
        async (file) => {
          await createAssets({
            variables: {
              file,
            },
          });
        }
      );

      if (promises) {
        target.value = "";
        return await Promise.all(promises);
      }
    };

    return (
      <FormProvider {...form}>
        <Modal
          className="flex flex-col w-full h-full gap-4 overflow-y-scroll sm:w-11/12 sm:overflow-y-auto sm:flex-row sm:h-2/3 3xl:w-fit 3xl:h-fit"
          open={openModal}
          ref={ref}
          {...props}
        >
          <main className="flex flex-col h-full gap-4 overflow-y-auto">
            <div className="flex flex-col items-center justify-start gap-4 pb-4 pr-4 lg:flex-row">
              <Button
                type="button"
                className="flex items-center w-full gap-1 border lg:w-fit border-black-10"
                variant="clear"
                onClick={handleClearImagesSelected}
              >
                <Trash size={18} className="text-black-80 dark:text-white" />{" "}
                Limpar seleção
              </Button>
              <Select
                name="channel"
                className="w-full h-10 lg:w-fit"
                defaultValue={perPage}
                isLoading={isLoadindAssetList}
                value={perPage}
                onValueChange={(e) => handleChangeQuantityPerPage(e)}
                options={quantitiyPerPage.map((quantity) => ({
                  label: `Mostrar ${quantity.value} por vez`,
                  value: quantity.value,
                }))}
              />
              <Form {...form} className="w-full lg:w-fit">
                <form>
                  <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute -translate-y-1/2 start-4 top-1/2">
                              <ImageIcon className="w-4 h-4 text-black-60 dark:text-black-10" />
                            </span>
                            <Input
                              id="search"
                              type="text"
                              aria-autocomplete="none"
                              autoComplete="off"
                              variant="icons"
                              placeholder="Pesquisar imagem"
                              className="!px-0 !pl-10 pr-4"
                              {...field}
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
            <footer className="flex items-center justify-end py-4 space-x-2 md:hidden">
              <PaginationButtons
                hrefToPreviousButton={`${pathname}?${createQueryString({
                  page: Number(page) - 1,
                  per_page: perPage ?? null,
                })}`}
                hrefToNextButton={`${pathname}?${createQueryString({
                  page: Number(page) + 1,
                  per_page: perPage ?? null,
                })}`}
                isLoading={isLoadindAssetList}
                page={page}
                pathname={pathname}
                perPage={perPage}
                totalItems={assetList?.assets.totalItems ?? 0}
                className="justify-end"
              />
            </footer>
            <div className="grid flex-row flex-wrap grid-cols-1 gap-4 pr-4 md:flex ">
              {assetList?.assets.items.map((asset) => {
                const includesInSelectedsRows = findInSelectedRows(asset);

                return (
                  <Button
                    key={asset.id}
                    className="relative flex items-center justify-center w-full h-40 overflow-hidden border-2 rounded-lg cursor-pointer md:size-36 group dark:border-black-60 border-black-10"
                    onClick={() => handleSelectPhtoOrVideo(asset)}
                  >
                    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center w-full h-full gap-1 transition-all duration-200 ease-linear opacity-0 bg-black-70 dark:bg-black-80 hover:opacity-100 group-hover:dark:bg-black-80/90 group-hover:bg-black-80/90">
                      <Check className="text-success" />
                      <p className="font-medium text-black-10">Selecionar</p>
                    </div>
                    {includesInSelectedsRows && (
                      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center w-full h-full gap-1 bg-black/70 dark:bg-black/90">
                        <CheckCircle className="text-success" />
                        <p className="font-medium text-black-10">Selecionado</p>
                      </div>
                    )}
                    {asset.type === "VIDEO" ? (
                      <video
                        className="z-40 object-contain w-full h-full"
                        muted
                        autoPlay
                        loop
                        width={160}
                        height={160}
                      >
                        <source src={asset.source} />
                      </video>
                    ) : (
                      <Image
                        src={asset.preview ?? ""}
                        alt="Imagem do produto"
                        className="object-contain w-full h-full"
                        width={160}
                        height={160}
                      />
                    )}
                  </Button>
                );
              })}
            </div>
            <footer className="items-center justify-end hidden py-4 space-x-2 md:flex">
              <PaginationButtons
                hrefToPreviousButton={`${pathname}?${createQueryString({
                  page: Number(page) - 1,
                  per_page: perPage ?? null,
                })}`}
                hrefToNextButton={`${pathname}?${createQueryString({
                  page: Number(page) + 1,
                  per_page: perPage ?? null,
                })}`}
                isLoading={isLoadindAssetList}
                page={page}
                pathname={pathname}
                perPage={perPage}
                totalItems={assetList?.assets.totalItems ?? 0}
                className="justify-end"
              />
            </footer>
          </main>

          <div>
            <UploadImage
              className="flex-1 w-full ml-auto h-fit"
              textImagesAccept="jpg, png, jpeg e video"
              widthImagesAccept="1010Kb"
              onChange={handleSelectImages}
              isLoading={isLoadingCreateAsset}
              multiple={isMultiple}
            />
            <footer className="flex flex-wrap justify-end gap-4 mt-4 ml-auto">
              <Button
                type="button"
                variant="clear"
                className="w-full border border-black-10 md:w-fit"
                onClick={() => setIsOpenModal(false)}
              >
                Voltar
              </Button>
              <Button
                type="submit"
                variant="primary"
                onClick={handleConfirmSelection}
                className="w-full md:w-fit"
              >
                Confirmar
              </Button>
            </footer>
          </div>
        </Modal>
      </FormProvider>
    );
  }
);

PhotoTable.displayName = "PhotoTable";

export { PhotoTable };
