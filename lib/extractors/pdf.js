var PDFParser = require( 'pdf2json' );

function extractText( filePath, options, cb ) {
  const pdfParser = new PDFParser( this, 1 );

  pdfParser.on( 'pdfParser_dataError', errData => cb( errData.parserError, null ) );
  pdfParser.on( 'pdfParser_dataReady', () => {
    cb( null, pdfParser.getRawTextContent() );
  });

  pdfParser.loadPDF( filePath );
}

module.exports = {
  types: ['application/pdf'],
  extract: extractText,
};
