import { PopupWidget } from "react-calendly"

import './CalendlyBtn.scss'

const CalendlyBtn = () => {
  return (
    <div className="calendlyBtn" style={{
      boxShadow: '1px 4px 10px red'
    }}>
        <PopupWidget
            url="https://calendly.com/ycf-bnm"
            rootElement={document.getElementById("root")}
            text='Schedule a Call'
            textColor="#FFF"
            color="#F6AE3A"
        />
    </div>
  )
}

export default CalendlyBtn