import React from 'react';

interface WorkflowProps {
  logo: string;
  header: string;
  description: string;
}

const WorkflowItem: React.FC<WorkflowProps> = ({ logo, header, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-4 border border-gray-300 rounded-lg">
      <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
      <h2 className="text-lg font-semibold mb-2">{header}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const Workflow: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8">Workflow</h1>
      <div className="flex justify-center">
        <WorkflowItem
          logo="/logo1.png"
          header="Header 1"
          description="Description for the first div"
        />
        <WorkflowItem
          logo="/logo2.png"
          header="Header 2"
          description="Description for the second div"
        />
        <WorkflowItem
          logo="/logo3.png"
          header="Header 3"
          description="Description for the third div"
        />
        <WorkflowItem
          logo="/logo4.png"
          header="Header 4"
          description="Description for the fourth div"
        />
      </div>
    </div>
  );
};

export default Workflow;
