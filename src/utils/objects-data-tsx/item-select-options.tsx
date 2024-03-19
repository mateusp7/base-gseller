import { Layers, Tag, Trash2 } from "lucide-react";
import { ReactNode } from "react";

export type ItemSelectType =
  | "edit-facet-values"
  | "assign-to-channel"
  | "remove-from-channel"
  | "delete";

interface IItemSelectOptionsProps {
  id: string;
  name: ReactNode;
  type: ItemSelectType;
  icon: ReactNode;
}

export const ItemSelectOptions: IItemSelectOptionsProps[] = [
  {
    id: "1",
    type: "edit-facet-values",
    name: (
      <p className="group-hover:text-black-10">Editar valores das etiquetas</p>
    ),
    icon: <Tag size={20} className="text-black-10 group-hover:text-black-10" />,
  },
  {
    id: "2",
    type: "assign-to-channel",
    name: <p className="group-hover:text-primary">Atribuir a um canal</p>,
    icon: (
      <Layers size={20} className="text-primary group-hover:text-primary" />
    ),
  },
  {
    id: "3",
    type: "remove-from-channel",
    name: <p className="group-hover:text-alert">Remover do canal atual</p>,
    icon: <Layers size={20} className="text-alert group-hover:text-alert" />,
  },
  {
    id: "4",
    type: "delete",
    name: <p className="group-hover:text-failure">Excluir</p>,
    icon: (
      <Trash2 size={20} className="text-failure group-hover:text-failure" />
    ),
  },
];
