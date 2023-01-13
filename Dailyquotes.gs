function myFunction() {
  var body;
  var pog = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1NtkPzPDGOX9T3y3JGt5nqRSjnEGwxlth1uFglXT9f3c/edit?usp=sharing");
  var ss = pog.getActiveSheet() ;
  var row = (ss.getRange(1, 5).getValue());
  row++;
  var quote1 = (ss.getRange(row, 1).getValue() + "\n     -" + ss.getRange(row, 2).getValue() + "\n\n\n");
  row++ ;
  var quote2 = (ss.getRange(row, 1).getValue() + "\n     -" + ss.getRange(row, 2).getValue() + "\n\n\n");
  row++ ;
  var quote3 = (ss.getRange(row, 1).getValue() + "\n     -" + ss.getRange(row, 2).getValue());
  body = (quote1 + quote2 + quote3);
  ss.getRange(1, 5).setValue(row);
  Logger.log(body);
  GmailApp.sendEmail("{Emails}","Daily Quotes", body);

  }
