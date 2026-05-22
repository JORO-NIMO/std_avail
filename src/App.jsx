import idPhoto from '../id.png'

function App() {
  return (
    <div className="page">
      <header>
        <h1>Mbarara University Of Science and Technology</h1>
      </header>

      <div className="content">
        <div className="photo">
          <img src={idPhoto} alt="Student photo" />
        </div>

        <div className="section-title">AMANYA JORONIMO</div>

        <div className="info-grid">
          <div className="label">STD NO.</div><div className="value">2400604014</div>
          <div className="label">REG NO.</div><div className="value">2024/BSE/069/PS</div>
          <div className="label">NAME</div><div className="value">AMANYA JORONIMO</div>
          <div className="label">SEX</div><div className="value">M</div>
          <div className="label">ACC YR.</div><div className="value">2025/2026</div>
          <div className="label">STUDY YR.</div><div className="value">2</div>
          <div className="label">SEM</div><div className="value">1</div>
          <div className="label">PROV.</div><div className="value">false</div>
          <div className="label">PROV EXP.</div><div className="value">null</div>
          <div className="label">REG BY.</div><div className="value">SELF</div>
          <div className="label">A/C BAL.</div><div className="value">UGX. 0</div>
        </div>

        <div className="section-title">COURSE UNITS</div>

        <div className="course-grid">
          <div className="label">(DVS2201) CITIZENRY, PROFESSIONALISM, GLOBALIZATION AND ENTREPRENEURSHIP</div><div className="value">normal</div>
          <div className="label">(SWE2203) SOFTWARE ARCHITECTURE AND DESIGN</div><div className="value">normal</div>
          <div className="label">(SWE2206) DISTRIBUTED COMPUTING</div><div className="value">normal</div>
          <div className="label">(SWE2201) NUMERICAL ANALYSIS</div><div className="value">normal</div>
          <div className="label">(SWE2204) SOFTWARE METRICS</div><div className="value">normal</div>
          <div className="label">(SWE2205) USER INTERFACE DESIGN AND DEVELOPMENT</div><div className="value">normal</div>
          <div className="label">(SWE2202) DATA COMMUNICATION TECHNOLOGY</div><div className="value">normal</div>
        </div>

        <div className="details-card">
          <h3>Student Details</h3>
          <ul>
            <li>BSE - BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING</li>
            <li>FCIS - FACULTY OF COMPUTING AND INFORMATICS</li>
            <li>MUST - MUST</li>
            <li>Campus: KIHUMURO</li>
            <li>Registered On: MON 18-MAY-2026 01:42 PM</li>
          </ul>
        </div>
      </div>

      <footer>
        <h4>&copy; Zeenode Ltd</h4>
      </footer>
    </div>
  )
}

export default App
