import { render, fireEvent } from '@testing-library/vue';
import SearchBar from '@/components/SearchBar.vue';

test('SearchBar emits search event on button click', async () => {
  const { getByPlaceholderText, getByText, emitted } = render(SearchBar);

  const input = getByPlaceholderText('Search...');
  const button = getByText('Search');

  await fireEvent.update(input, 'vue.js');
  await fireEvent.click(button);

  expect(emitted().search[0]).toEqual(['vue.js']);
});
