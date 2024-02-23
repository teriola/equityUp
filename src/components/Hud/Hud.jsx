import HudStyles from './Hud.module.css';

function Hud() {
    const income = 5000;
    const expenses = 4000;

    return (
        <ul className={HudStyles.list}>
            <li className={HudStyles.item}>
                <p className={HudStyles.label}>Income</p>
                <p className={`${HudStyles.value} ${HudStyles.green}`}>{income}лв</p>
            </li>
            <li className={HudStyles.item}>
                <p className={HudStyles.label}>Expenses</p>
                <p className={`${HudStyles.value} ${HudStyles.red}`}>{expenses}лв</p>
            </li>
        </ul>
    );
}
export default Hud;