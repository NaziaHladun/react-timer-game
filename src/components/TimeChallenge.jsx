import React, { useState } from "react";

export default function TimeChallenge({ title, targetTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p>
        {targetTime} second {targetTime >= 1 ? "" : "s"}
      </p>
      <p>
        <button>Start challenge</button>
      </p>
      <p className="">Time is running / Time inactive</p>
    </section>
  );
}
