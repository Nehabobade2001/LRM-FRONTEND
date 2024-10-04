
import React, { useEffect, useState } from 'react';
import { Box, Typography, Switch, Grid, Paper,Button, CircularProgress, List, ListItem, ListItemText, Divider } from '@mui/material';
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
];



export default function FormGroupCheckbox() {
  const [currentDoc, setCurrentDoc] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [documentLoading, setDocumentLoading] = useState(false);
  const [defaultViewer, setDefaultViewer] = useState(true);


  const [documents, setDocuments] = useState([]);

  const fetchDocuments = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/records'); // Replace with your API endpoint
      const data = await response.json();
      setDocuments(data); // Assuming your API returns an array of documents
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);




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
    // <Box sx={{ minHeight: '100vh', display: 'flex', gap: 2, p: 2, bgcolor: '#f5f5f5' }}>
    //   <Paper elevation={3} sx={{ minHeight: '100vh', p: 2, flex: 1, bgcolor: '#e0e0e0' }}>
    //     <Typography variant="h5" gutterBottom>Documents</Typography>
    //     <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
    //       <Typography variant="body1">File Viewer</Typography>
    //       <Switch
    //         checked={defaultViewer}
    //         onChange={(e) => {
    //           if (e.target.checked && !isPdfType) {
    //             alert('Google Docs Viewer supports only PDF files.');
    //             return;
    //           }
    //           setDocumentLoading(!e.target.checked && isPdfType);
    //           setDefaultViewer(e.target.checked);
    //         }}
    //       />
    //       <Typography variant="body1">Google Docs Viewer</Typography>
    //     </Grid>
    //     <List>
    //       {documents.map((doc, index) => (
    //         <React.Fragment key={index}>
    //           <ListItem button onClick={() => loadDocument(doc)}>
    //             <a
    //               href={doc.url}
    //               download
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               style={{ marginRight: '10px', color: '#1976d2', textDecoration: 'none' }}
    //             >
    //               <i className="fa-solid fa-download"></i>
    //             </a>
    //             <ListItemText primary={doc.name} />
    //           </ListItem>
    //           <Divider />
    //         </React.Fragment>
    //       ))}
    //     </List>
    //   </Paper>

    //   <Paper elevation={3} sx={{ flex: 3, p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #1976d2', borderRadius: '8px' }}>
    //     {isLoading && (
    //       <CircularProgress />
    //     )}
    //     {!isLoading && Object.keys(currentDoc).length === 0 && (
    //       <Typography>Select any document to view</Typography>
    //     )}
    //     {isPdfType && defaultViewer && (
    //       <iframe
    //         title="doc"
    //         width="100%"
    //         height="600px"
    //         src={currentDoc.url}
    //         style={{ border: 'none' }}
    //         onLoad={() => setDocumentLoading(false)}
    //       />
    //     )}
    //     {isPdfType && !defaultViewer && (
    //       <FileViewer fileType="pdf" filePath={currentDoc.url} />
    //     )}
    //     {isImageType && (
    //       <img
    //         src={currentDoc.url}
    //         alt={currentDoc.name}
    //         style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
    //       />
    //     )}
    //     {documentLoading && (
    //       <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'rgba(255, 255, 255, 0.75)' }}>
    //         <CircularProgress />
    //       </Box>
    //     )}
    //   </Paper>
    // </Box>
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Uploaded Documents
        </Typography>
        <Grid container spacing={2}>
          {documents.map((doc) => (
            <Grid item xs={12} sm={6} md={4} key={doc.id}>
              <Paper elevation={2} sx={{ padding: 2, textAlign: 'center' }}>
                <Typography variant="h6">{doc.fileName}</Typography>
                <Button
                  variant="outlined"
                  href={doc.filePath} // Assuming your document has a filePath
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Document
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

