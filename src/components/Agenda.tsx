import { Clock, List } from "lucide-react";
import "./Agenda.css";

interface AgendaItem {
  time: string;
  title: string;
  description?: string;
  partner?: string;
  break?: boolean;
}

const agendaItems: AgendaItem[] = [
  { time: "09:00 - 09:30", title: "Registration & Welcome Coffee", break: true   },
  { time: "09:30 - 10:00", title: "Opening Keynote: The Future of PLM", description: "Discover how 3DEXPERIENCE is transforming product development", partner: "Dassault Systèmes" },
  { time: "10:00 - 11:00", title: "Digital Twin & Simulation Technologies", description: "Learn how to create virtual replicas for enhanced product testing", partner: "SIMULIA" },
  { time: "11:00 - 11:15", title: "Coffee Break", break: true  },
  { time: "11:15 - 12:15", title: "Collaborative Design in the Cloud", description: "Best practices for team collaboration using 3DEXPERIENCE platform", partner: "CATIA" },
  { time: "12:15 - 13:30", title: "Networking Lunch", description: "Connect with partners and industry peers", break: true  },
  { time: "13:30 - 14:30", title: "Industry 4.0 & Smart Manufacturing", description: "Implementing PLM for manufacturing excellence", partner: "DELMIA" },
  { time: "14:30 - 15:30", title: "Customer Success Stories", description: "Real-world case studies from leading manufacturers", partner: "Multiple Partners" },
  { time: "15:30 - 16:00", title: "Live Product Demo & Q&A", description: "Interactive demonstration of 3DEXPERIENCE capabilities" },
  { time: "16:00 - 17:00", title: "Closing Remarks & Networking Reception", description: "Wrap-up and final networking opportunity" },
];

export function Agenda() {
  return (
    <section className="agenda-section" id="agenda">
      <div className="agenda-container">
        <div className="agenda-header">
          
          <h2 className="agenda-title"><List/> Agenda</h2>
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
                    <Clock className="icon" />
                    <span>{item.time}</span>
                  </div>

                  {/* Content */}
                  <div className="agenda-content">
                    <h4 className="agenda-item-title">{item.title}</h4>
                    {item.description && (<p className="agenda-description">{item.description}</p>)}

                    {item.partner && (
                      <div className="agenda-partner">{item.partner}</div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
