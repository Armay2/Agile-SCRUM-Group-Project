import _ from 'lodash';

const inventory = [{
        id: 12,
        name: 'Y-Solowarm',
        description: 'Mandatory stable internet solution',
        price: '50',
        VAT: '20',
        category: 'Luxury',
        select: false,
    },
    {
        id: 27,
        name: 'Bitchip',
        description: 'Team-oriented optimal hub',
        price: '30',
        VAT: '10',
        category: 'Essential',
    },
    {
        id: 91,
        name: 'Flexidy',
        description: 'Profound uniform database',
        price: '20',
        VAT: '5',
        category: 'Gift',
    },
    {
        id: 54,
        name: 'Tres-Zap',
        description: 'Programmable eco-centric budgetary management',
        price: '50',
        VAT: '20',
        category: 'Luxury',
    },
];

// inventory = _.uniqBy(inventory, 'name')
const sortedInventory = _.sortBy(inventory, 'category');
const c = inventory.map(item => item.category);

export const categories = _.uniq(c);
export default sortedInventory;

// console.log(inventory)
// console.log(categories)