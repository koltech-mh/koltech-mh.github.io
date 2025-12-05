import { Clock } from "lucide-react";
import "./Agenda.css";

interface AgendaItem {
  time: string;
  title: string;
  description?: string;
  speaker?: string[];
  break?: boolean;
}

const agendaItems: AgendaItem[] = [
  { time: "09:00 - 09:30", title: "Rejestracja & Kawa Powitalna", break: true   },
  { time: "09:30 - 09:40", title: "W trzech słowach o FANUC", speaker: ["FANUC"] },
  { time: "09:40 - 09:50", title: "W trzech słowach o KOLTECH", speaker: ["KOLTECH"] },
  { time: "09:30 - 10:00", title: "W trzech słowach o ZAPAMET", speaker: ["ZAPAMET"] },
  { time: "10:00 - 10:30", title: "Robotyzacja - korzyści dla przemysłu", description: "O produktach firmy FANUC, zastosowaniach robotów i korzyściach płynących z ich zastosowania.", speaker: ["FANUC"] },
  { time: "10:30 - 11:00", title: "3DEXPERIENCE DELMIA - programowanie robotów", description: "Zaprezentujemy aplikacje z rodziny DELMIA, słóżące do programowania robotów i tworzenia zdigitalizowanych komórek robotycznych.", speaker: ["KOLTECH"] },
  { time: "11:00 - 11:30", title: "Praktyka integratora", speaker: ["ZAPAMET"] },
  { time: "11:30 - 11:50", title: "Przerwa Kawowa", break: true  },
  { time: "11:50 - 12:20", title: "3DEXPERIENCE - Wirtualny bliźniak", speaker: ["Dassault Systèmes"] },
  { time: "12:20 - 12:50", title: "3DEXPERIENCE CATIA - generatywne projektowanie odkuwek, matryc, stempli", speaker: ["KOLTECH"] },
  { time: "13:20 - 13:20", title: "Regeneracja matryc metodą napawania", description:"O innowacyjnym, zautomatyzowanym procesie regeneracji matryc w teorii", speaker: ["KOLTECH"] },
  { time: "13:20 - 13:40", title: "Przerwa Kawowa", break: true  },
  { time: "13:40 - 14:00", title: "Showroom Fanuca - proces budowania celi zrobotyzowane", speaker: ["FANUC"]  },
  { time: "14:00 - 14:30", title: "Napawanie - demonstracja na żywo", description: "Wisieńka na torcie całego wydarzenia! Wraz z partnerami pokażemy w praktyce regenerację matrycy przy pomocy robota.", speaker: ["KOLTECH", "ZAPAMET", "FANUC"] },
  { time: "14:30 - 15:30", title: "Podsumowanie, Pytania i Odpowiedzi" },
  { time: "14:45 - 15:45", title: "Lunch", description: "Nawiąż kontakt z partnerami i przedstawicielami branży, przy ciepłym posiłku", break: true  },
  { time: "15:45 - 16:30", title: "Rozmowy w Kuluarach", description: "Spragniony informacji? Jesteśmy tu dla Ciebie! Porozmawiajmy!", break: true  },
];

export function Agenda() {
  return (
    <section className="agenda-section" id="agenda">
      <div className="agenda-container">
        <div className="agenda-header">
          
          <h2 className="agenda-title"><Clock/> Agenda</h2>
          <p className="agenda-subtitle">
            
          </p>
        </div>

        <div className="agenda-list-wrapper">
          <div className="agenda-list">
            {agendaItems.map((item, index) => (
              <div key={index} className={item.break?"agenda-card agenda-card-break":"agenda-card"}>
                <div className="agenda-card-inner">
                  
                  {/* Time */}
                  <div className="agenda-time">
                    {/*<Clock className="icon" />*/}
                    <span>{item.time}</span>
                  </div>

                  {/* Content */}
                  <div className="agenda-content">
                    <h4 className="agenda-item-title">{item.title}</h4>
                    {item.description && (<p className="agenda-description">{item.description}</p>)}
                  </div>

                  {/* Speaker */}
                  {item.speaker && item.speaker.length > 0 && (
                    <div className="agenda-speakers">
                      {item.speaker.map((spk, index) => (<div key={index} className="agenda-speaker">{spk}</div>))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
