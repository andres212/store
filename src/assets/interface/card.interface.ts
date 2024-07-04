export interface ProductInterface {
  availableShirt?: string;
  category?: string;
  categorySlug?: string;
  count?: string;
  date?: string;
  detail?: string;
  id?: number;
  image?: string;
  isDiscount?: string;
  isNew?: string;
  isSpent?: string;
  isStuffed?: string;
  name?: string;
  nameBrand?: string;
  order?: string;
  priceHigher?: string;
  priceRetail?: string;
}

export interface ProductInterfaceLoad {
  id: number,
  category: {
      id: string,
      name: string
  },
  hasNoIvaDays: boolean,
  name: string,
  description: null,
  reference: null,
  status: string,
  calculationScale: number,
  images: Images[],
  price: Price[],
  inventory: {
      initialQuantityDate: string,
      initialQuantity: number,
      unit: string,
      unitCost: 6000,
      availableQuantity: number,
      warehouses: [
          {
              name: string,
              observations: null,
              isDefault: true,
              status: string,
              id: string,
              costCenter: null,
              address: null,
              initialQuantity: number,
              availableQuantity: number,
              minQuantity: null,
              maxQuantity: null
          }
      ]
  },
  accounting: {
      inventory: {
          id: string,
          idParent: string,
          name: string,
          text: string,
          code: null,
          description: string,
          type: string,
          readOnly: boolean,
          nature: string,
          blocked: string,
          status: string,
          categoryRule: {
              id: string,
              name: string,
              key: string
          },
          use: string,
          showThirdPartyBalance: boolean
      },
      inventariablePurchase: {
          id: string,
          idParent: string,
          name: string,
          text: string,
          code: null,
          description: string,
          type: string,
          readOnly: boolean,
          nature: string,
          blocked: string,
          status: string,
          categoryRule: {
              id: string,
              name: string,
              key: string
          },
          use: string,
          showThirdPartyBalance: boolean
      }
  },
  tax: [],
  customFields: [],
  productKey: null,
  type: string,
  itemType: null,
  itemCategory: {
      id: number,
      name: string,
      description: string,
      status: string
  }
}

interface Price {
  idPriceList: number,
  name: string,
  type: string,
  price: number,
  currency: {
    code: string,
    symbol: string
  },
  main: true
}

interface Images {
  id: number,
  name: string,
  url: string,
  favorite: boolean
}
