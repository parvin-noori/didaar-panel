import { Table } from "antd";
import React from "react";

export default function Activity() {
  const tableCol = [
    {
      title: "name",
      dataIndex: "name",
      filters: [
        {
          text: "joe",
          value: "joe",
        },
        {
          text: "category 1",
          value: "category 1",
          children: [
            {
              text: "Yellow",
              value: "Yellow",
            },
            {
              text: "Pink",
              value: "Pink",
            },
          ],
        },
        {
          text: "category 2",
          value: "category 2",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      filterMode: true,
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
    { title: "Age", dataIndex: "age", sorter: (a, b) => a.age - b.age },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filterSearch: true,
      width: "40%",
      onFilter: (value, record) => record.address.startWith(value),
    },
  ];
  const tableData=[
    {
      key:'1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
  ]
  return <Table columns={tableCol} dataSource={tableData}></Table>;
}
