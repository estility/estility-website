import React, { useState } from 'react';
import { Portal } from 'react-portal';

const JSDWidget = () => {
  return (
    <script data-jsd-embedded data-key="24f6f973-a447-4964-9819-92d7d8611e76" data-base-url="https://jsd-widget.atlassian.com" src="https://jsd-widget.atlassian.com/assets/embed.js"></script>
  );
};

const App = () => {
  const [showWidget, setShowWidget] = useState(true);

  return (
    <div>
      <button onClick={() => setShowWidget(!showWidget)}>Toggle Widget</button>
      {showWidget && (
        <Portal>
          <div className="jsd-widget">
            <JSDWidget />
          </div>
        </Portal>
      )}
    </div>
  );
};