import { Card, Divider, Spin, Tag, Row, Col } from "antd"

import {
  FullContainer,
  StyleCard,
  DivChart,
  InsideCard,
  FirstContainer,
} from "./styles"

import {
  ExclamationCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons"

import api from "../api/api"
import { useEffect, useState } from "react"

import Chart from "./Chart/Chart"

function Index() {
  const [data, setData] = useState([])
  const [units, setUnits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const response = await api.get("/assets")
    const docs = response.data

    setData(docs)
    setLoading(false)
    console.log(data)
  }

  return (
    <>
      <FirstContainer>Selecionar empresa:</FirstContainer>
      <FullContainer>
        {loading ? (
          <Spin />
        ) : (
          <>
            {data.map((data) => (
              <div className="site-card-wrapper">
                <Row gutter={4}>
                  <Col span={10}>
                    <StyleCard key={data.id}>
                      <strong>{data.name}</strong>
                      {data.status === "inAlert" ? (
                        <Tag
                          icon={<ExclamationCircleOutlined />}
                          color="warning"
                          className="cards"
                        >
                          In alert!!
                        </Tag>
                      ) : data.status === "inOperation" ? (
                        <Tag
                          icon={<SyncOutlined spin />}
                          color="processing"
                          className="cards"
                        >
                          In operation
                        </Tag>
                      ) : (
                        <Tag
                          icon={<CloseCircleOutlined />}
                          color="error"
                          className="cards"
                        >
                          In downtime
                        </Tag>
                      )}
                      <InsideCard>
                        <Card
                          bordered={false}
                          style={{ width: 300 }}
                          cover={<img alt="card" src={data.image} />}
                        >
                          <DivChart>
                            <Chart data={data.healthscore} className="chart" />
                          </DivChart>
                          Units:{" "}
                          {data.unitId === 1 ? (
                            <strong>"Unidade Jaguar"</strong>
                          ) : (
                            <strong>"Unidade Tobias"</strong>
                          )}
                          <br />
                          Company: <strong>Empresa teste</strong>
                        </Card>
                      </InsideCard>
                      <Divider />
                    </StyleCard>
                  </Col>
                </Row>
              </div>
            ))}
          </>
        )}
      </FullContainer>
    </>
  )
}

export default Index
