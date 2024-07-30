import { defineEmits } from 'vue';
import { useProductStore } from '@/stores/products';

const emit = defineEmits(['filter', 'sort']);
const store = useProductStore();

const sortOptions = [
  { value: 'asc', text: 'Цена по возрастанию' },
  { value: 'desc', text: 'Цена по убыванию' }
];

const materialOptions = store.materials.map((material) => ({
  value: material.id,
  text: material.name
}));

const sort = (value: string) => {
  emit('sort', value);
};

const filter = (value: number) => {
  emit('filter', Number(value));
};

export { sortOptions, materialOptions, sort, filter };
