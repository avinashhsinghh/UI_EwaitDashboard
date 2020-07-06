import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol
} from '@coreui/react'



let array1;
let appBook,array2;

// eslint-disable-next-line no-unused-vars



const WidgetsDropdown = (props) => {



 // console.log(props.apiData)
 //array2=countnumber(props);
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={props.apiData.length}
          text="Total Appointment Booked"
          footerSlot={
            <div></div>
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown

          color="gradient-info"
          header="15"
          text="Total Patient Arrived"
          footerSlot={
            <div></div>
          }
        >

        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="10"
          text="Waiting to be Called In"
          footerSlot={
            <div></div>
          }
        >

        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="6"
          text="Patient with Doctor"
          footerSlot={
            <div></div>
          }
        >

        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
