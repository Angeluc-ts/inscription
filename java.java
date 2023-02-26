JButton btn = new JButton("Bouton");

btn.addActionListener(new ActionListener()
{
  public void actionPerformed(ActionEvent e)
  {
    //afficher le jdialog lorsque le bouton est cliqué
    JDialog dialog = new JDialog(frame, "Welcome to WayToLearnX", true);
    dialog.setLocationRelativeTo(frame);
    dialog.setVisible(true);
  }
});