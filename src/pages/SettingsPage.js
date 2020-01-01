import React, { useContext } from "react";
import { AuthContext } from "../components/Auth";
import { StoreContext } from "../components/Store";
import app from "../firebase";

const SettingsPage = props => {
  const { auth } = useContext(AuthContext);
  const { configs } = useContext(StoreContext);

  const submit = async event => {
    event.preventDefault();
    const { sueldo } = event.target.elements;

    if (sueldo.value === null || sueldo.value.length === 0) {
      alert("Debe ingresar el sueldo.");
      return;
    }

    app
      .firestore()
      .collection("configs")
      .doc(auth.uid)
      // eslint-disable-next-line
      .set({ sueldo: sueldo.value })
      .then(() => {
        alert("Guardado correctamente.");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="sueldo">Sueldo</label>
              <input
                type="number"
                className="form-control"
                id="sueldo"
                value={configs.sueldo}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
