// src/app/sublinks.data.ts

import { SubmenuPage } from "../interfaces/SubmenuInterface";


// Example data - replace with your actual data structure
export const sublinks: SubmenuPage[] = [
  {
    page: 'Products',
    links: [
      { label: 'Payment', icon: 'fa fa-credit-card', url: '/products/payment' },
      { label: 'Terminal', icon: 'fa fa-terminal', url: '/products/terminal' },
      { label: 'Connect', icon: 'fa fa-link', url: '/products/connect' },
    ],
  },
  {
    page: 'Developers',
    links: [
      { label: 'Plugins', icon: 'fa fa-plug', url: '/developers/plugins' },
      { label: 'Libraries', icon: 'fa fa-book', url: '/developers/libraries' },
      { label: 'Help', icon: 'fa fa-question-circle', url: '/developers/help' },
      { label: 'Billing', icon: 'fa fa-file-invoice-dollar', url: '/developers/billing' },
    ],
  },
  {
    page: 'Company',
    links: [
      { label: 'About', icon: 'fa fa-briefcase', url: '/company/about' },
      { label: 'Customers', icon: 'fa fa-users', url: '/company/customers' },
    ],
  },
];