import './app-info.css'

const AppInfo = ({sumEmployees, employeesWithIncrease}) => {
    return  (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {sumEmployees}</h2>
            <h2>Премию получат: {employeesWithIncrease}</h2>
        </div>
    );
}

export default AppInfo;