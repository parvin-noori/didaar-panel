import { Radio } from "antd";
import React from "react";

export default function Deal() {
  return (
    <div>
      <Radio.Group value="middle">
        <Radio.Button value="row-listview">کاریز</Radio.Button>
        <Radio.Button value="col-listview">لیست</Radio.Button>
        <Radio.Button value="forecast"> پیش بینی</Radio.Button>
      </Radio.Group>
    </div>
  );
}
