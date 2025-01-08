import "./BuildingAutomation.css"

function BAHeader() {
    return (
        <div>
            <h1>
                BUILDING AUTOMATION SYSTEM
            </h1>
            <h2>
                ระบบเชื่อมต่อเซ็นเซอร์และอุปกรณ์ IoT อัตโนมัติ
            </h2>
        </div>
    )
}

interface BAProps {
    engName: string,
    thaiName: string,
    svgLocate: string
}

const mockProps: BAProps[] = [
    { engName: "Lift Countrol", thaiName: "ระบบควบคุมลิฟท์", svgLocate: "" },
    { engName: "Gateway Control", thaiName: "ระบบควบคุมอุปกรณ์เซ็นเซอร์", svgLocate: "" },
    { engName: "Security Access Control", thaiName: "ระบบรักษาความปลอดภัยกล้องวงจรปิด ประตูดิจิตอล", svgLocate: "" },
    { engName: "Fire Protection", thaiName: "ระบบป้องกันอัคคีภัย", svgLocate: "" },
    { engName: "HVAC", thaiName: "ระบบสภาพเเวดล้อมในอาคาร ปรับอากาศ", svgLocate: "" },
    { engName: "Energy Meter", thaiName: "ระบบวัดค่า เเสดงข้อมูลการใช้พลังงาน", svgLocate: "" },
    { engName: "Facility Control", thaiName: "ระบบเเสดงค่าการใช้นํ้า นํ้าเสีย ก๊าซ", svgLocate: "" },
    { engName: "OTHER SYSTEM", thaiName: "ระบบอื่น ๆ", svgLocate: "" },
]

function BACustomAnimate({ props }: { props: BAProps[] }) {
    return (
        <div className="ba-grid">
            {props.map((prop, index) => (
                <div id={`child-${index}`} className="ba-grid-children">
                    <h3>{prop.engName} </h3>
                    <span className="ba-custom-line" />
                    <h4>{prop.thaiName}</h4>
                    {prop.svgLocate ? (<img src={prop.svgLocate} alt={prop.engName} />) : null}
                </div>
            ))}
        </div>
    )
}

export default function BuildingAutomation() {
    return (
        <div>
            <BAHeader />
            <BACustomAnimate props={mockProps} />
        </div>
    )
}
