


// import React, { useEffect, useState } from 'react';
// import FileViewer from 'react-file-viewer';


// const documents = [
//   {
//     name: 'Document 1',
//     url: '/docs/jeet.pdf',
//     type: 'pdf',
//   },
//   {
//     name: 'Image 1',
//     url: 'https://learts-4437.kxcdn.com/wp-content/uploads/2018/11/product-56.jpg',
//     type: 'image/jpeg',
//   },
//   // Add more documents here
// ]

// export default function FormGroupCheckbox() {
//   const [currentDoc, setCurrentDoc] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [documentLoading, setDocumentLoading] = useState(false);
//   const [defaultViewer, setDefaultViewer] = useState(true);

//   useEffect(() => {
//     if (documents.length > 0) {
//       setIsLoading(false);
//     }
//   }, []);

//   function loadDocument(doc) {
//     document.querySelectorAll('.view-container li').forEach((e) => {
//       e.classList.remove('active');
//     });

//     setCurrentDoc(doc);
//     setDocumentLoading(doc.type === 'pdf' && defaultViewer);
//   }

//   useEffect(() => {
//     if (currentDoc.type && currentDoc.type !== 'pdf') {
//       setDefaultViewer(true);
//       setDocumentLoading(false);
//     }
//     if (currentDoc.type === 'pdf' && defaultViewer) {
//       setDocumentLoading(true);
//     }
//   }, [currentDoc, defaultViewer]);

//   const isImageType = currentDoc?.type?.startsWith('image/');
//   const isPdfType = currentDoc?.type === 'pdf';

//   return (
//     <div className="w-[100vw] min-h-screen flex items-center gap-1 justify-between">
//       <div className="bg-red-300 min-h-screen">
       
//       </div>
//       <div className="w-[80vw] min-h-screen p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-2xl font-semibold">Documents</h3>
//           <div className="flex items-center space-x-4">
//             <label
//               className="text-sm font-medium text-gray-600"
//               htmlFor="fileViewerSwitch"
//             >
//               File Viewer
//             </label>
//             <input
//               id="fileViewerSwitch"
//               type="checkbox"
//               checked={defaultViewer}
//               onChange={(e) => {
//                 if (e.target.checked && !isPdfType) {
//                   alert('Google Docs Viewer currently supports only PDF files.');
//                   return;
//                 }
//                 setDocumentLoading(!e.target.checked && isPdfType);
//                 setDefaultViewer(e.target.checked);
//               }}
//               className="toggle-checkbox"
//             />
//             <label
//               className="text-sm font-medium text-gray-600"
//               htmlFor="fileViewerSwitch"
//             >
//               Google Docs Viewer
//             </label>
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <div className="w-1/4">
//             <ul className="list-none">
//               {documents.map((doc, index) => (
//                 <li
//                   key={index}
//                   className={`p-2 cursor-pointer ${
//                     doc.name === currentDoc.name
//                       ? 'bg-gray-200'
//                       : 'hover:bg-gray-100'
//                   }`}
//                   onClick={() => loadDocument(doc)}
//                 >
//                   <a
//                     href={doc.url}
//                     download
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-block mr-2 text-blue-600 hover:underline"
//                   >
//                     <i className="fa-solid fa-download"></i>
//                   </a>
//                   <span>{doc.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="w-3/4 p-2 border rounded">
//             <div className="h-[80vh] flex items-center justify-center border border-gray-300 relative">
//               {isLoading && (
//                 <div className="flex items-center justify-center">
//                   <span className="mr-2">Loading</span>
//                   <div className="w-8 h-8 border-4 border-t-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//               )}
//               {!isLoading && Object.keys(currentDoc).length === 0 && (
//                 <span>Select any document to view</span>
//               )}
//               {isPdfType && defaultViewer && (
//                 <iframe
//                   title="doc"
//                   width="100%"
//                   height="100%"
//                   src={currentDoc.url}
//                   style={{ border: 'none' }}
//                   onLoad={() => setDocumentLoading(false)}
//                 />
//               )}
//               {isPdfType && !defaultViewer && (
//                 <FileViewer fileType="pdf" filePath={currentDoc.url} />
//               )}
//               {isImageType && (
//                 <img
//                   src={currentDoc.url}
//                   alt={currentDoc.name}
//                   className="w-full h-full object-contain"
//                 />
//               )}
//               {documentLoading && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
//                   <div className="w-8 h-8 border-4 border-t-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         {!isLoading && documents.length === 0 && (
//           <div className="text-center text-gray-600">No Documents Available</div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Box, Typography, Switch, Grid, Paper, CircularProgress, List, ListItem, ListItemText, Divider } from '@mui/material';
import FileViewer from 'react-file-viewer';

const documents = [
  {
    name: 'Document 1',
    url: '/docs/jeet.pdf',
    type: 'pdf',
  },
  {
    name: 'Image 1',
    url: 'https://learts-4437.kxcdn.com/wp-content/uploads/2018/11/product-56.jpg',
    type: 'image/jpeg',
  },
  // Add more documents here
];

export default function FormGroupCheckbox() {
  const [currentDoc, setCurrentDoc] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [documentLoading, setDocumentLoading] = useState(false);
  const [defaultViewer, setDefaultViewer] = useState(true);

  useEffect(() => {
    if (documents.length > 0) {
      setIsLoading(false);
    }
  }, []);

  function loadDocument(doc) {
    setCurrentDoc(doc);
    setDocumentLoading(doc.type === 'pdf' && defaultViewer);
  }

  useEffect(() => {
    if (currentDoc.type && currentDoc.type !== 'pdf') {
      setDefaultViewer(true);
      setDocumentLoading(false);
    }
    if (currentDoc.type === 'pdf' && defaultViewer) {
      setDocumentLoading(true);
    }
  }, [currentDoc, defaultViewer]);

  const isImageType = currentDoc?.type?.startsWith('image/');
  const isPdfType = currentDoc?.type === 'pdf';

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', gap: 2, p: 2, bgcolor: '#f5f5f5' }}>
      <Paper elevation={3} sx={{ minHeight: '100vh', p: 2, flex: 1, bgcolor: '#e0e0e0' }}>
        <Typography variant="h5" gutterBottom>Documents</Typography>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="body1">File Viewer</Typography>
          <Switch
            checked={defaultViewer}
            onChange={(e) => {
              if (e.target.checked && !isPdfType) {
                alert('Google Docs Viewer supports only PDF files.');
                return;
              }
              setDocumentLoading(!e.target.checked && isPdfType);
              setDefaultViewer(e.target.checked);
            }}
          />
          <Typography variant="body1">Google Docs Viewer</Typography>
        </Grid>
        <List>
          {documents.map((doc, index) => (
            <React.Fragment key={index}>
              <ListItem button onClick={() => loadDocument(doc)}>
                <a
                  href={doc.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: '10px', color: '#1976d2', textDecoration: 'none' }}
                >
                  <i className="fa-solid fa-download"></i>
                </a>
                <ListItemText primary={doc.name} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>

      <Paper elevation={3} sx={{ flex: 3, p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #1976d2', borderRadius: '8px' }}>
        {isLoading && (
          <CircularProgress />
        )}
        {!isLoading && Object.keys(currentDoc).length === 0 && (
          <Typography>Select any document to view</Typography>
        )}
        {isPdfType && defaultViewer && (
          <iframe
            title="doc"
            width="100%"
            height="600px"
            src={currentDoc.url}
            style={{ border: 'none' }}
            onLoad={() => setDocumentLoading(false)}
          />
        )}
        {isPdfType && !defaultViewer && (
          <FileViewer fileType="pdf" filePath={currentDoc.url} />
        )}
        {isImageType && (
          <img
            src={currentDoc.url}
            alt={currentDoc.name}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        )}
        {documentLoading && (
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'rgba(255, 255, 255, 0.75)' }}>
            <CircularProgress />
          </Box>
        )}
      </Paper>
    </Box>
  );
}

