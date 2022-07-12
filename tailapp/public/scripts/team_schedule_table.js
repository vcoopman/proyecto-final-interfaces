"use strict";

const e = React.createElement;

const Cell = ({ inserting }) => {
  const [show, setShow] = React.useState("hidden");
  const [players, setPlayers] = React.useState(
    Math.floor(Math.random() * 5) == 1 ? Math.floor(Math.random() * 30) : 0
  );
  const [mark, setMark] = React.useState(false);

  const handleMark = () => {
    if (mark) {
      setPlayers(players - 1);
      setMark(false);
    } else {
      setPlayers(players + 1);
      setMark(true);
    }
  };

  const getRightGreen = () => {
    if (players === 0) return "white";
    if (players < 5) return "lightgreen";
    if (players < 10) return "green";
    return "darkgreen";
  };

  const getRightBgColor = () => {
    if (inserting) return mark ? "lightgreen" : "white";
    else return getRightGreen();
  };

  return (
    <div
      style={{
        width: 40,
        height: 26,
        backgroundColor: getRightBgColor(),
        border: "1px solid grey",
      }}
      onClick={() => inserting && handleMark()}
      onMouseEnter={() => setShow("visible")}
      onMouseLeave={() => setShow("hidden")}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "yellow",
          bottom: 65,
          right: 65,
          width: 100,
          height: 35,
          border: "1px black solid",
          textAlign: "center",
          visibility: inserting ? "hidden" : show,
        }}
      >
        {players} jugadores
      </div>
    </div>
  );
};

const TeamScheduleTable = () => {
  const [inserting, setInserting] = React.useState(false);

  return (
    <div>
      <div
        id="team_schedule_table_root"
        style={{
          backgroundColor: "white",
          position: "absolute",
          display: "flex",
          flexWrap: "wrap",
          border: 0,
          left: 14,
          top: 83,
          width: 346,
          height: 881,
        }}
      >
        <div
          style={{ width: 66, height: 49, textAlign: "center", padding: 10 }}
        >
          HORA
        </div>
        {["LU", "MA", "MI", "JU", "VI", "SA", "DO"].map((e) => (
          <div
            style={{ width: 40, height: 49, textAlign: "center", padding: 10 }}
          >
            {e}
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          border: 0,
          left: 14,
          top: 132,
        }}
      >
        {[
          "08:00",
          "08:30",
          "09:00",
          "09:30",
          "10:00",
          "10:30",
          "11:00",
          "11:30",
          "12:00",
          "12:30",
          "13:00",
          "13:30",
          "14:00",
          "14:30",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
          "20:30",
          "21:00",
          "21:30",
          "22:00",
          "22:30",
          "23:00",
          "23:30",
        ].map((e) => (
          <div
            className="bg-white"
            style={{ width: 66, height: 26, textAlign: "center" }}
          >
            {e}
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "white",
          position: "absolute",
          display: "flex",
          flexWrap: "wrap",
          border: 0,
          left: 80,
          top: 132,
          height: 832,
          width: 280,
        }}
      >
        {[...Array(32 * 7).keys()].map((i) =>
          e(Cell, { inserting: inserting })
        )}
      </div>

      <button
        style={{
          color: inserting ? "white" : "green",
          backgroundColor: inserting ? "green" : "white",
          position: "absolute",
          border: "1px solid green",
          left: 15,
          top: 980,
          height: 60,
          width: 346,
        }}
        onClick={() => setInserting(!inserting)}
      >
        INGRESAR
      </button>
    </div>
  );
};

const domContainer = document.querySelector("#team_schedule_table");
const root = ReactDOM.createRoot(domContainer);
root.render(e(TeamScheduleTable));
