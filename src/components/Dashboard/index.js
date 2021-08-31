import { Card, Divider, Spin } from "antd"

import { FullContainer } from "./styles"

import api from "../api/api"
import { useEffect, useState } from "react"

function Index() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [data])

  async function getData() {
    const response = await api.get("/assets")
    const docs = response.data

    setData(docs)
    setLoading(false)
    console.log(data)
  }

  return (
    <FullContainer>
      {loading ? (
        <Spin />
      ) : (
        <>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="card"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            Teste
          </Card>
          <Divider />
        </>
      )}
    </FullContainer>
  )
}

export default Index
