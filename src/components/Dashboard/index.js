import { Card, Divider } from "antd"

import { FullContainer } from "./styles.js"

function Index() {
  return (
    <FullContainer>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="card"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      ></Card>
      <Divider />
    </FullContainer>
  )
}

export default Index
