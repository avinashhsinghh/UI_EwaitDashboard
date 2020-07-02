import React, { lazy, useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CSwitch,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    setInterval(async()=>{
      try {
        const response = await fetch(
          "https://v12qe1f1jf.execute-api.us-east-1.amazonaws.com/Dev/get-all-data",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseJson = await response.json();
       console.log(responseJson);
        const newData = [];
        for (let index = 0; index < responseJson?.responseData.length; index++) {
          const element = responseJson?.responseData[index];
          newData.push({
            name: element?.name,
            arrived: element?.arrived,
            PhoneNo: element?.PhoneNo,
            dateTime: element?.dateTime,
            email:element?.email
          });
        }
        setData(newData)
      } catch (error) {
        console.log(error);
      }
    },1000)
  },[])

  return (
    <>
      <WidgetsDropdown />
      <CCard>

      </CCard>

      {/* <WidgetsBrand withCharts/> */}

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Patients Detail
            </CCardHeader>
            <CCardBody>

              <br />
              {/* edit here */}
              <table  scrollY className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Patient Name</th>
                    <th className="text-center">Appointment Time</th>
                    <th>Arrived Status</th>
                    <th className="text-center">With Doctor Status</th>
                    <th className="text-center">Checking In</th>
                    <th>Appointed Doctor</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((eachData, index) => {
                      return (
                        <tr key={index}>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>{eachData.name}</div>
                      <div className="small text-muted">
                        <span>Contact-</span> {eachData.PhoneNo}
                      </div>
                    </td>
                    {/* <td className="text-center">
                      <CIcon height={25} name="cif-us" title="us" id="us" />
                    </td> */}
                    <td>
                        <div className="text-center">
                        <h6 className="bold">{eachData.dateTime}</h6>
                        </div>

                    </td>
                    <td className="text-center">
                    <h6 className="bold"><strong>{eachData.arrived}</strong></h6>
                    </td>
                    <td>
                    <td className="text-center">
                      <CSwitch  color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} defaultChecked/>
                    </td>
                    </td>
                    <td>
                    <div className="small text-muted">
                        <CBadge className="mr-1" color="primary">waiting to be called</CBadge>
                      </div>
                      <CIcon height={25} name="cil-phone" title="phone" id="phone" />
                    </td>
                    <td>with Casey</td>
                  </tr>
                      )
                    })
                  }
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
