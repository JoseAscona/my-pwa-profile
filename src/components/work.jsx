import React from 'react';

function Work() {
    return(
        <section className="work-experience">
        <div className="content-wrap item-details divider">
          <h2>Work Experience</h2>
          <p>See my complete work history on <a href=" https://www.linkedin.com/in/jos%C3%A9-luis-ascona/" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>.</p>

          <section className="job-item">
            <div className="job-details">
              <h3>Workplace Level 1 Service Desk Analyst</h3>
              <p>Givaudan</p>
              <p>May-2018 - Today</p>
            </div>
            <div className="job-summary">
              <ul>
                <li>Internal client support for USA employees.</li>
                <li>Identification on the impact of the reported incidents to ensure resolution and escalation if necessary to the proper team.</li>
                <li>Manage ticket's queue to met the SLAs.</li>
                <li>Support for incident management..</li>
                <li>Internet Blocked Sites management</li>
                <li>Grant access to groups</li>
                <li>Manage users quotas in Servers</li>
                <li>Unlock users and reset passwords</li>
                <li>Creation of troubleshooting tickets using ServiceNow</li>
                <li>RSA management and problem troubleshooting</li>
                <li>Creation and password reset supporting SAP accounts</li>
                <li>Software package installation using LanDesk</li>
              </ul>
            </div>
            
          </section>


          <section className="job-item">
            <div className="job-details">
              <h3>Sales Support Specialist</h3>
              <p>IBM - Technical Support Services</p>
              <p>April 2013 - March 2018</p>
            </div>
            <div className="job-summary">
              <ul>
                <li>Leadership and coordination of 3 specialists in charge of the configuration used for IBM’s software maintenance renewals.</li>
                <li>Management and contract tracking as per business requirements to ensure compliance according to IBMs processes and policies.</li>
                <li>Acted as liaison for Latin American countries and teams based on USA,Canada, Slovakia -among others- to ensure that all quality assurance tasks were achieved for the deployment of a new tool that allows to manage the e2e printing process of all contracts (including multi-vendor services).</li>
                <li>Creation and follow up of business opportunities for the entire South American region including the Caribbean.</li>
                <li>Analysis, documentation and creation of reports to inform loyalty growth for Software Services executives which would provide the insights for the upcoming annual strategist.</li>
                <li>Software maintenance´s pre-sales and end-to-end tracking for three key IBM platforms for South American region including the Caribbean.</li>
                <li>Pre-sale and end-to-end tracking of CISCO’s software and hardware maintenance offered by IBM acting as a Business Partner for the entire South American region including the Caribbean.</li>
              </ul>
            </div>  
          </section>

          <section className="job-item">
            <div className="job-details">
              <h3>Help Desk Agent - Radio-call dispatcher</h3>
              <p>IBM</p>
              <p>March 2012 - April 2013</p>
            </div>
            <div className="job-summary">
              <p>Scope: Argentina, Chile, Colombia, Ecuador, Perú, Venezuela, Uruguay, USA</p>
              <p>Tasks Performed:</p>
             <ul>
              <li>Key focal point sent to Colombia for 1 month to help with the de-transition and knowledge transfer of the Radio-call services.</li>
              <li>Creation and opening of hardware and software incident tickets for our clients.</li>
              <li>Subject matter expert identifying and resolving complex problems related to audit ready on all tickets.</li>
              <li>Primary phone attention to technicians for resolution of calls or equipment spare parts orders.</li>
              <li>Bilingual CISCO’s Customer Care for hardware incidents focused on Latin American and USA Customers.</li>
              <li>Primary web attention for equipment spare parts orders or incidents reported on the website</li>
              <li>Document and metrics creation -according to business needs-.</li>
             </ul>
            </div>           
          </section>

      </div>
      </section>

    )
};

export default Work;
