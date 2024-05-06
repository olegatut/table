import React from 'react';

import { Table } from './components';
// import { useFetchProduct } from './hooks';
import { data as initData } from './data/data';
import { DataResponse } from './types';

import './App.css';

// const LIMIT = 10;

function App() {
  // const [ data, setData ] = React.useState<Row[]>([]);

  // const { products, fetch } = useFetchProduct();

  // React.useEffect(() => {
  //   fetch();
  // }, []);
  // React.useEffect(() => {
  //   if (data.some(({ loading }) => loading)) {
  //     fetch();
  //   }
  // }, [data]);
  // React.useEffect(() => setData([
  //   ...data.filter(({ loading }) => !loading),
  //   ...products.map(({ id, title, price }) => ({
  //     loading: false,
  //     values: [id, title, price],
  //   })),
  // ]), [products]);

  // const onScrolledToButtom = React.useCallback(() => {
  //   setData([
  //     ...data,
  //     ...Array.from(Array(LIMIT).keys()).map(() => ({
  //       loading: true,
  //       values: [null, null, null],
  //     })),
  //   ]);
  // }, [data]);

  return (
    <div className="app">
        <Table
          data={(initData.result as any as DataResponse[])}
          // onScrolledToButtom={onScrolledToButtom}
        />
    </div>
  );
}

export default App;
