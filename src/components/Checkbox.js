import React, { useReducer } from "react";

export function AltCheckbox() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <input
      type="checkbox"
      value={checked}
      onChange={setChecked}
      data-testid="checkbox"
    />
  );
}

export default function Checkbox() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  return (
    <>
      <label>
        {checked ? "checked" : "not checked"}
        <input type="checkbox" value={checked} onChange={setChecked} />
      </label>
    </>
  );
}
