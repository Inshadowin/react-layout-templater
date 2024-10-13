import React from 'react';
import { createRoot } from 'react-dom/client';

import TemplateEdit from '../src/main/TemplateEdit';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TemplateEdit />);

export default App;
