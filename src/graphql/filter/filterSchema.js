const customPropertiesFilter = 'CustomProperties';

const defaultFilterItems = { key: 'ID' };

const defaultSeperator = '_';

/** NE, LIKE, AND NOT LIKE won't be supported for now
 * GENERIC: { EQ: 'EQUAL', NE: 'NOT EQUAL' },
 *
 */

const operators = {
  GENERIC: { EQ: 'EQUAL' },
  LOGICIAL: { AND: 'AND', OR: 'OR' },
  COMPARATIVE: {
    GT: 'GRETE THAN',
    GTE: 'GREAT THAN OR EQUAL',
    LT: 'LESS THAN',
    LTE: 'LESS THAN OR EQUAL',
  },
  INCLUDE: { IN: 'IN', NOTIN: 'NOT IN' },
  MATCH: { LIKE: 'LIKE', NOTLIKE: 'NOT LIKE' },
};

class Filter {
  constructor(name, hasUnifiedFilterItem = true) {
    this.name = name;
    this.typeName = `${name}Filter`;
    this.filterItems = {};
    this.hasUnifiedFilterItem = hasUnifiedFilterItem;
    if (this.hasUnifiedFilterItem)
      this.filterItems.unfifiedFilterItem = new UnifiedFilterItem(this);
  }

  addFilterItem(itemName, type) {
    if (this.filterItems[itemName] !== undefined) return;
    switch (type) {
      case 'Integer':
        this.filterItems[itemName] = new NumberFilterItem(itemName, type);
        break;
      case 'Float':
        this.filterItems[itemName] = new NumberFilterItem(itemName, type);
        break;
      case 'String':
        this.filterItems[itemName] = new StringFilterItem(itemName);
        break;
      case 'Boolean':
        this.filterItems[itemName] = new BooleanFilterItem(itemName);
        break;
      case 'Date':
        this.filterItems[itemName] = new DateFilterItem(itemName);
        break;
      case 'ID':
        this.filterItems[itemName] = new IDFilterItem(itemName);
        break;
      default:
        break;
    }
  }

  toString() {
    let res = `input ${this.typeName} {\n`;
    Object.keys(this.filterItems).forEach(key => (res += this.filterItems[key].toString()));
    return (this.filterItems && `${res}}\n`) || '';
  }
}

class GlobalFilter extends Filter {
  constructor() {
    super('Global');
  }
}

class FilterItem {
  constructor(name, type) {
    this.name = name;
    this.operators = [];
    this.type = type;
    if (this.name.length) this.addOperator(operators.GENERIC, this.type);
  }

  addOperator(operatorCategory, type, isArray = false) {
    Object.keys(operatorCategory).forEach(operator => {
      this.operators.push(new Oprator(operator, type, isArray));
    });
  }

  toString() {
    let res = '';
    this.operators.forEach(
      operator =>
        (res += `  ${(this.name.length && this.name + defaultSeperator) ||
          ''}${operator.toString()}\n`)
    );
    return res;
  }
}

class UnifiedFilterItem extends FilterItem {
  constructor(filter) {
    super('', null, filter);
    this.addOperator(operators.LOGICIAL, filter.typeName, true);
  }
}

class StringFilterItem extends FilterItem {
  constructor(name) {
    super(name, 'String');
    /**
     * Disable include operator
     * this. addOperator(operators.INCLUDE, this.type, true);
     **/

    this.addOperator(operators.INCLUDE, this.type, true);
  }
}

class BooleanFilterItem extends FilterItem {
  constructor(name) {
    super(name, 'Boolean');
  }
}

class NumberFilterItem extends FilterItem {
  constructor(name, type) {
    super(name, type);
    this.addOperator(operators.COMPARATIVE, this.type);
    /**
     * Disable include operator
     * this. addOperator(operators.INCLUDE, this.type, true);
     **/
  }
}

class DateFilterItem extends FilterItem {
  constructor(name) {
    super(name, 'Date');
    this.addOperator(operators.COMPARATIVE, this.type);
  }
}

class IDFilterItem extends FilterItem {
  constructor(name) {
    super(name, 'ID');
    this.addOperator(operators.INCLUDE, this.type, true);
  }
}

class CustomPropertiesFilterItem extends FilterItem {
  constructor() {
    super('id', 'String');
    this.addOperator(operators.INCLUDE, this.type, true);
  }
}

class Oprator {
  constructor(name, type, isArray) {
    this.name = name;
    this.type = type;
    this.isArray = isArray;
  }

  toString() {
    let result = `${this.name}: `;
    if (this.isArray) result += `[${this.type}!]`;
    else result += this.type;
    return result;
  }
}

class FilterSchema {
  constructor() {
    this.filterTypes = {};
    this.filterTypes.global = new GlobalFilter();
  }

  createDefaultFilterItem(collectionName) {
    Object.keys(defaultFilterItems).forEach(key => {
      this.filterTypes[collectionName].addFilterItem(key, defaultFilterItems[key]);
    });
  }

  createFilterType(collectionName) {
    if (this.filterTypes[collectionName] === undefined)
      this.filterTypes[collectionName] = new Filter(collectionName);
    return this.filterTypes[collectionName];
  }

  createCustomPropertyFilterType() {
    if (this.filterTypes[customPropertiesFilter] === undefined) {
      const customPropertyFilter = new Filter(customPropertiesFilter, false);
      customPropertyFilter.filterItems[
        `${customPropertiesFilter}Item`
      ] = new CustomPropertiesFilterItem();
      this.filterTypes[customPropertiesFilter] = customPropertyFilter;
    }
  }
}

const filterSchema = new FilterSchema();

module.exports = {
  filterSchema,
  customPropertiesFilter,
  defaultSeperator,
  operators,
  defaultFilterItems,
};
