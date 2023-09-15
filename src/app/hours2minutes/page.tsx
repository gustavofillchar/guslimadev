'use client'

import React, { useState } from 'react';

function HourToMinuteConverter() {
  const [hours, setHours] = useState<number | string>('');
  const [minutes, setMinutes] = useState<number>(0);

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hoursInput = e.target.value;
    setHours(hoursInput);

    // Faça a conversão de horas para minutos
    const minutesOutput = parseFloat(hoursInput) * 60;
    setMinutes(minutesOutput); // Arredonda para 2 casas decimais
  };

  return (
    <main className="bg-gray-950 text-white min-h-screen flex flex-col items-center justify-center gap-5">
      <img className="h-16 w-16 rounded-full" src="https://avatars.githubusercontent.com/u/17850043" alt="Profile" />
      <h1 className="text-lg">
        Gus Lima
        <span className="text-base border-l pl-3 ml-3 border-l-slate-700">Software Engineer</span>
      </h1>
      <div className="flex flex-col items-center gap-2">
        <label className="text-slate-400">Digite o número de horas:</label>
        <input
          className="border border-slate-700 rounded-md px-2 py-1 text-slate-400 text-center"
          type="number"
          value={hours}
          onChange={handleHoursChange}
        />
      </div>
      <p className="text-slate-400">
        {hours === '' ? 'Digite um valor de horas' : `${hours} horas são equivalentes a ${ Math.round(parseInt(minutes))} minutos.`}
      </p>

    </main>
  );
}

export default HourToMinuteConverter;
