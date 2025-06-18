import React from 'react';
import { useState } from 'react';

const FeatureMainDiv: React.FC = () => {
    const [state, setState] = useState("copy")
    const code = `
const response = await fetch('https://api.supermemory.ai/v3/connections/onedrive', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sm_ywdhjSbiDLkL1jjVotSegR_rsq3ZZKNRJmVr12p4ItTcf',
  }
});

const data = await response.json();
`.trim();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setState("copied!");
        setTimeout(() => {
            setState("copy")
        }, 1000)
        // alert('Copied!');
    };

    return (

        <div className="z-1 md:absolute md:left-1/2 md:top-2/3 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-4xl rounded-xl shadow-md border bg-white overflow-hidden    ">
            {/* Top bar */}
            <div className="flex max-sm:overflow-x-scroll items-center justify-between p-2  border-b-[1px] border-gray-200">
                <div className="space-x-2 bg-[#efefef]  rounded-full cursor-pointer flex items-center px-4 justify-center text-black">
                    <div className="text-sm px-3 py-4 rounded-full  hover:bg-gray-300">Add memories</div>
                    <div className="text-sm px-3 py-4 rounded-full  hover:bg-gray-300">Search memories</div>
                    <div className="text-sm rounded-xl bg-[#21252a] px-[2rem] md:px-[.75rem] py-[.6rem] text-white hover:bg-gray-800">Connect apps</div>
                </div>
                <button onClick={copyToClipboard} className="text-sm px-3 py-1 text-black flex gap-2 cursor-pointer"><i className="bi bi-copy"></i>{state}</button>
            </div>

            {/* Code block */}
            #7928a1
            <pre className="text-[1rem] mx-[2rem] md:px-20 py-4 overflow-x-auto whitespace-pre-wrap text-black rounded-md  ">
                <code>
                    <span style={{ color: '#7928a1' }}>const</span> response = <span style={{ color: '#7928a1' }}>await</span>{' '}
                    fetch(<span style={{ color: '#008000' }}>'https://api.supermemory.ai/v3/connections/onedrive'</span>, <span>{'{'}</span>
                    {'\n'}&nbsp;&nbsp;<span>method</span>: <span style={{ color: '#008000' }}>'POST'</span>,{'\n'}
                    &nbsp;&nbsp;<span>headers</span>: <span>{'{'}</span>{'\n'}
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#008000' }}>'Authorization'</span>: <span style={{ color: '#008000' }}>'Bearer sm_...'</span>{'\n'}
                    &nbsp;&nbsp;<span>{'}'}</span>{'\n'}
                    <span>{'}'}</span>);
                    {'\n\n'}
                    <span style={{ color: '#7928a1' }}>const</span> data = <span style={{ color: '#7928a1' }}>await</span> response.json();
                </code>
            </pre>




        </div>
    );
};

export default FeatureMainDiv;
