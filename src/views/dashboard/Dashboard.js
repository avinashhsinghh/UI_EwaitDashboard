import React, { lazy } from 'react'
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
  return (
    <>
      <WidgetsDropdown />
      <CCard>
      
      </CCard>

      {/* <WidgetsBrand withCharts/> */}

      <CRow>
        <CCol>
          <CCard>
            {/* <CCardHeader>
              Patients Detail
            </CCardHeader> */}
            <CCardBody>

              {/* <br /> */}
              {/* edit here */}
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Patient</th>
                    <th className="text-center">Appointment Time</th>
                    <th>Arrived Status</th>
                    <th className="text-center">With Doctor Status</th>
                    <th className="text-center">Checking In</th>
                    <th>Appointed Doctor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                    </td>
                    <td className="text-center">
                      <div> 05/01/2020 09:00 AM</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                        <CBadge className="mr-1" color="primary">Yes</CBadge>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <CSwitch className={'mx-1'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} defaultChecked />
                    </td>
                    <td>
                      <div className="small text-muted">
                        <CBadge className="mr-1" color="primary">waiting to be called</CBadge>
                      </div>
                      <CIcon height={25} name="cil-phone" title="phone" id="phone" />
                    </td>
                    <td>
                      <div>Dr. Casey</div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                    </td>
                    <td className="text-center">
                      <div>05/01/2020 09:00 AM</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <CBadge className="mr-1" color="secondary">No</CBadge>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CSwitch className={'mx-1'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} defaultChecked />
                    </td>
                    <td>
                      <div className="small text-muted">
                      <CBadge className="mr-1" color="secondary">not arrived</CBadge>
                        </div>
                        <CIcon height={25} name="cil-phone" title="phone" id="phone" />
                    </td>
                    <td>
                      <div>Dr. Casey</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      
                    </td>
                    <td className="text-center">
                      <div>05/01/2020 11:00 AM</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <CBadge className="mr-1" color="success">With Doctor</CBadge>
                        </div>
                        
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CSwitch className={'mx-1'} color={'primary'} labelOn={'\u2713'} labelOff={'\u2715'} defaultChecked />
                    </td>
                    <td>
                      <div className="small text-muted">
                        <CBadge className="mr-1" color="info">called</CBadge>
                      </div>
                        <CIcon height={25} name="cil-phone" title="phone" id="phone" />
                    </td>
                    <td>
                      <div>Dr. Casey</div>
                    </td>
                  </tr>
                  
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
