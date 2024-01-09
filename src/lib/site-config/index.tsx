import { Icons } from '@/components/icons'
import { SidebarOptionsProps } from '../types/sidebar.type'

export const sidebarOptions: SidebarOptionsProps[] = [
  {
    id: 1,
    principalName: 'Catálogo',
    menuName: 'catalog',
    hasCollapsibleItems: true,
    icon: <Icons.boxes className="w-5 h-5" />,
    subItems: [
      {
        id: 1,
        childrenName: 'Produtos',
        href: '/catalog/products/',
      },
      {
        id: 2,
        childrenName: 'Etiquetas',
        href: '/catalog/facets/',
      },
      {
        id: 3,
        childrenName: 'Coleções',
        href: '/catalog/collections/',
      },
    ],
  },
  {
    id: 2,
    principalName: 'Usuários',
    menuName: 'users',
    hasCollapsibleItems: true,
    icon: <Icons.users className="w-5 h-5" />,
    subItems: [
      {
        id: 1,
        childrenName: 'Administradores',
        href: '/user/administrators/',
      },
      {
        id: 2,
        childrenName: 'Clientes',
        href: '/user/clients/',
      },
    ],
  },
  {
    id: 3,
    principalName: 'Configurações',
    menuName: 'config',
    hasCollapsibleItems: true,
    icon: <Icons.settings className="w-5 h-5" />,
    subItems: [
      {
        id: 1,
        childrenName: 'Minha Loja',
        href: '/config/myshop/',
      },
      {
        id: 2,
        childrenName: 'Canais',
        href: '/config/channels/',
      },
      {
        id: 3,
        childrenName: 'Permissões',
        href: '/config/permissions/',
      },
      {
        id: 3,
        childrenName: 'Gestão de páginas',
        href: '/config/pagemanagement/',
      },
    ],
  },
  {
    id: 4,
    principalName: 'Images',
    menuName: 'images',
    hasCollapsibleItems: true,
    icon: <Icons.image className="w-5 h-5" />,
    subItems: [
      {
        id: 1,
        childrenName: 'Galeria',
        href: '/images/galery/',
      },
      {
        id: 2,
        childrenName: 'Banners',
        href: '/images/banners/',
      },
    ],
  },
  {
    id: 5,
    principalName: 'Vendas',
    hasCollapsibleItems: false,
    subItems: [
      {
        id: 1,
        childrenName: 'Painel',
        icon: <Icons.layoutDashboard className="w-5 h-5" />,
        href: '/dashboard/',
      },
      {
        id: 2,
        childrenName: 'Pedidos',
        icon: <Icons.cart className="w-5 h-5" />,
        href: '/sales/orders/',
      },
      {
        id: 3,
        childrenName: 'Cupons / Descontos',
        icon: <Icons.percentCircle className="w-5 h-5" />,
        href: '/promotions/',
      },
      {
        id: 4,
        childrenName: 'Avaliações',
        icon: <Icons.star className="w-5 h-5" />,
        href: '/rating/',
      },
      {
        id: 5,
        childrenName: 'Devoluções',
        icon: <Icons.archive className="w-5 h-5" />,
        href: '/refunds/',
      },
    ],
  },
  {
    id: 6,
    principalName: 'Logística',
    hasCollapsibleItems: false,
    subItems: [
      {
        id: 1,
        childrenName: 'Endereços',
        icon: <Icons.pin className="w-5 h-5" />,
        href: '/logistic/address/',
      },
      {
        id: 2,
        childrenName: 'Dados de recebimento',
        icon: <Icons.creditCard className="w-5 h-5" />,
        href: '/logistic/receipt',
      },
      {
        id: 3,
        childrenName: 'Dados de pagamento',
        icon: <Icons.creditCard className="w-5 h-5" />,
        href: '/logistic/payment',
      },
      {
        id: 4,
        childrenName: 'Métodos de envio',
        icon: <Icons.truck className="w-5 h-5" />,
        href: '/logistic/shipping',
      },
    ],
  },
  {
    id: 6,
    principalName: 'Sistema',
    hasCollapsibleItems: false,
    subItems: [
      {
        id: 1,
        childrenName: 'Fila de processos',
        icon: <Icons.cpu className="w-5 h-5" />,
        href: '/system/process/',
      },
    ],
  },
]
