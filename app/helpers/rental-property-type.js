import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([type]) {
  if (communityPropertyTypes.includes(type)) {
    return 'Comunity';
  }

  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
