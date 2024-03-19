import { SidebarOptionsProps } from '@gseller-monorepo/sidebar'
import {
  Archive,
  Boxes,
  Cpu,
  CreditCard,
  Image as ImageIcon,
  LayoutDashboard,
  PercentCircle,
  Pin,
  Settings,
  ShoppingCart,
  Star,
  Truck,
  Users
} from 'lucide-react'

export const sidebarOptions: SidebarOptionsProps[] = [
  {
    id: 1,
    principalName: 'Catálogo',
    menuName: 'catalog',
    hasCollapsibleItems: true,
    icon: <Boxes className="w-5 h-5" />,
    subItems: [
      {
        id: 1,
        childrenName: 'Produtos',
        href: '/catalog/products/'
      },
      {
        id: 2,
        childrenName: 'Etiquetas',
        href: '/catalog/facets/'
      },
      {
        id: 3,
        childrenName: 'Coleções',
        href: '/catalog/collections/'
      }
    ]
  },
  {
    id: 2,
    principalName: 'Usuários',
    menuName: 'users',
    hasCollapsibleItems: true,
    icon: <Users className="w-5 h-5" />,
    subItems: [
      {
        id: 1,
        childrenName: 'Administradores',
        href: '/users/administrators/'
      },
      {
        id: 2,
        childrenName: 'Clientes',
        href: '/users/clients/'
      }
    ]
  },
  {
    id: 3,
    principalName: 'Configurações',
    menuName: 'config',
    hasCollapsibleItems: true,
    icon: <Settings className="w-5 h-5" />,
    subItems: [
      {
        id: 1,
        childrenName: 'Minha Loja',
        href: '/config/myshop/'
      },
      {
        id: 2,
        childrenName: 'Canais',
        href: '/config/channels/'
      },
      {
        id: 3,
        childrenName: 'Permissões',
        href: '/config/permissions/'
      },
      {
        id: 3,
        childrenName: 'Gestão de páginas',
        href: '/config/pagemanagement/'
      }
    ]
  },
  {
    id: 4,
    principalName: 'Imagens',
    menuName: 'images',
    hasCollapsibleItems: true,
    icon: <ImageIcon className="w-5 h-5" />,
    subItems: [
      {
        id: 1,
        childrenName: 'Galeria',
        href: '/images/galery/'
      },
      {
        id: 2,
        childrenName: 'Banners',
        href: '/images/banners/'
      }
    ]
  },
  {
    id: 5,
    principalName: 'Vendas',
    hasCollapsibleItems: false,
    subItems: [
      {
        id: 1,
        childrenName: 'Painel',
        icon: <LayoutDashboard className="w-5 h-5" />,
        href: '/sales/dashboard/'
      },
      {
        id: 2,
        childrenName: 'Pedidos',
        icon: <ShoppingCart className="w-5 h-5" />,
        href: '/sales/orders/'
      },
      {
        id: 3,
        childrenName: 'Cupons / Descontos',
        icon: <PercentCircle className="w-5 h-5" />,
        href: '/sales/promotions/'
      },
      {
        id: 4,
        childrenName: 'Avaliações',
        icon: <Star className="w-5 h-5" />,
        href: '/sales/rating/'
      },
      {
        id: 5,
        childrenName: 'Devoluções',
        icon: <Archive className="w-5 h-5" />,
        href: '/sales/refunds/'
      }
    ]
  },
  {
    id: 6,
    principalName: 'Logística',
    hasCollapsibleItems: false,
    subItems: [
      {
        id: 1,
        childrenName: 'Endereços',
        icon: <Pin className="w-5 h-5" />,
        href: '/logistic/address/'
      },
      {
        id: 2,
        childrenName: 'Dados de recebimento',
        icon: <CreditCard className="w-5 h-5" />,
        href: '/logistic/receipt'
      },
      {
        id: 3,
        childrenName: 'Dados de pagamento',
        icon: <CreditCard className="w-5 h-5" />,
        href: '/logistic/payment'
      },
      {
        id: 4,
        childrenName: 'Métodos de envio',
        icon: <Truck className="w-5 h-5" />,
        href: '/logistic/shipping'
      }
    ]
  },
  {
    id: 6,
    principalName: 'Sistema',
    hasCollapsibleItems: false,
    subItems: [
      {
        id: 1,
        childrenName: 'Fila de processos',
        icon: <Cpu className="w-5 h-5" />,
        href: '/system/process/'
      }
    ]
  }
]
