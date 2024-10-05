// import React, { useEffect, useState } from 'react';
// import {
//   Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon,
//   Switch, Box, CircularProgress, IconButton
// } from '@mui/material';
// import FileViewer from 'react-file-viewer';
// import DownloadIcon from '@mui/icons-material/Download';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import ImageIcon from '@mui/icons-material/Image';

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
// ];

// export default function FormGroupCheckbox() {
//   const [currentDoc, setCurrentDoc] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [documentLoading, setDocumentLoading] = useState(false);
//   const [defaultViewer, setDefaultViewer] = useState(true);

//   useEffect(() => {
//     // Ensure documents is an array before setting isLoading to false
//     if (Array.isArray(documents) && documents.length > 0) {
//       setIsLoading(false);
//     }
//   }, []);

//   function loadDocument(doc) {
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
//     <Container maxWidth="xl" sx={{ display: 'flex', minHeight: '100vh', gap: 2 }}>
//       {/* Sidebar */}
//       {/* Document Viewer Section */}
//       <Box sx={{ flexGrow: 1, padding: 3 }}>
//         <Paper elevation={3} sx={{ padding: 3 }}>
//           <Grid container justifyContent="space-between" alignItems="center">
//             <Typography variant="h5">Documents</Typography>
//             <Box display="flex" alignItems="center">
//               <Typography variant="body2" sx={{ mr: 2 }}>Google Docs Viewer</Typography>
//               <Switch
//                 checked={defaultViewer}
//                 onChange={(e) => {
//                   if (e.target.checked && !isPdfType) {
//                     alert('Google Docs Viewer supports only PDF files.');
//                     return;
//                   }
//                   setDocumentLoading(!e.target.checked && isPdfType);
//                   setDefaultViewer(e.target.checked);
//                 }}
//               />
//             </Box>
//           </Grid>

//           <Grid container spacing={3} sx={{ mt: 2 }}>
//             {/* Document List */}
//             <Grid item xs={12} md={3}>
//               <Paper elevation={2} sx={{ maxHeight: '70vh', overflow: 'auto' }}>
//                 <List>
//                   {Array.isArray(documents) && documents.length > 0 ? (
//                     documents.map((doc, index) => (
//                       <ListItem
//                         key={index}
//                         button
//                         selected={doc.name === currentDoc.name}
//                         onClick={() => loadDocument(doc)}
//                       >
//                         <ListItemIcon>
//                           {doc.type === 'pdf' ? <PictureAsPdfIcon color="primary" /> : <ImageIcon color="secondary" />}
//                         </ListItemIcon>
//                         <ListItemText primary={doc.name} />
//                         <IconButton component="a" href={doc.url} download target="_blank">
//                           <DownloadIcon />
//                         </IconButton>
//                       </ListItem>
//                     ))
//                   ) : (
//                     <Typography align="center" variant="body2">No Documents Available</Typography>
//                   )}
//                 </List>
//               </Paper>
//             </Grid>

//             {/* Document Viewer */}
//             <Grid item xs={12} md={9}>
//               <Paper sx={{ height: '80vh', position: 'relative' }}>
//                 {isLoading && (
//                   <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//                     <CircularProgress />
//                     <Typography sx={{ ml: 2 }}>Loading...</Typography>
//                   </Box>
//                 )}
//                 {!isLoading && Object.keys(currentDoc).length === 0 && (
//                   <Typography align="center" variant="h6">Select any document to view</Typography>
//                 )}
//                 {isPdfType && defaultViewer && (
//                   <iframe
//                     title="doc"
//                     width="100%"
//                     height="100%"
//                     src={currentDoc.url}
//                     style={{ border: 'none' }}
//                     onLoad={() => setDocumentLoading(false)}
//                   />
//                 )}
//                 {isPdfType && !defaultViewer && (
//                   <FileViewer fileType="pdf" filePath={currentDoc.url} />
//                 )}
//                 {isImageType && (
//                   <img
//                     src={currentDoc.url}
//                     alt={currentDoc.name}
//                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//                   />
//                 )}
//                 {documentLoading && (
//                   <Box position="absolute" top={0} left={0} right={0} bottom={0} display="flex" justifyContent="center" alignItems="center" bgcolor="rgba(255,255,255,0.7)">
//                     <CircularProgress />
//                   </Box>
//                 )}
//               </Paper>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Box>
//     </Container>
//   );
// }



import React, { useEffect, useState } from 'react';
import {
  Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon,
  Switch, Box, CircularProgress, IconButton
} from '@mui/material';
import FileViewer from 'react-file-viewer';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';

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
];

export default function FormGroupCheckbox() {
  const [currentDoc, setCurrentDoc] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [documentLoading, setDocumentLoading] = useState(false);
  const [defaultViewer, setDefaultViewer] = useState(true);

  useEffect(() => {
    // Ensure documents is an array before setting isLoading to false
    if (Array.isArray(documents) && documents.length > 0) {
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
    <Container maxWidth="xl" sx={{ display: 'flex', minHeight: '100vh', gap: 2 }}>
      {/* Sidebar */}
      {/* Document Viewer Section */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="h5">Documents</Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body2" sx={{ mr: 2 }}>Google Docs Viewer</Typography>
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
            </Box>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {/* Document List */}
            <Grid item xs={12} md={3}>
              <Paper elevation={2} sx={{ maxHeight: '70vh', overflow: 'auto', borderRadius: '8px' }}>
                <List>
                  {Array.isArray(documents) && documents.length > 0 ? (
                    documents.map((doc, index) => (
                      <ListItem
                        key={index}
                        button
                        selected={doc.name === currentDoc.name}
                        onClick={() => loadDocument(doc)}
                        sx={{
                          border: '1px solid',
                          borderColor: doc.name === currentDoc.name ? 'primary.main' : 'grey.300',
                          borderRadius: '8px',
                          margin: '8px',
                          padding: '10px',
                          boxShadow: doc.name === currentDoc.name ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderColor: 'primary.main',
                          },
                        }}
                      >
                        <ListItemIcon>
                          {doc.type === 'pdf' ? <PictureAsPdfIcon color="primary" /> : <ImageIcon color="secondary" />}
                        </ListItemIcon>
                        <ListItemText primary={doc.name} />
                        <IconButton component="a" href={doc.url} download target="_blank">
                          <DownloadIcon />
                        </IconButton>
                      </ListItem>
                    ))
                  ) : (
                    <Typography align="center" variant="body2">No Documents Available</Typography>
                  )}
                </List>
              </Paper>
            </Grid>

            {/* Document Viewer */}
            <Grid item xs={12} md={9}>
              <Paper sx={{ height: '80vh', position: 'relative' }}>
                {isLoading && (
                  <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                    <CircularProgress />
                    <Typography sx={{ ml: 2 }}>Loading...</Typography>
                  </Box>
                )}
                {!isLoading && Object.keys(currentDoc).length === 0 && (
                  <Typography align="center" variant="h6">Select any document to view</Typography>
                )}
                {isPdfType && defaultViewer && (
                  <iframe
                    title="doc"
                    width="100%"
                    height="100%"
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
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                )}
                {documentLoading && (
                  <Box position="absolute" top={0} left={0} right={0} bottom={0} display="flex" justifyContent="center" alignItems="center" bgcolor="rgba(255,255,255,0.7)">
                    <CircularProgress />
                  </Box>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
