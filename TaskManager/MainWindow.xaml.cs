using System.Collections.ObjectModel;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace TaskManager
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public ObservableCollection<Task> Tasks { get; set; }
        public MainWindow()
        {
            InitializeComponent();
            Tasks = new ObservableCollection<Task>();
            DataContext = this;

            PriorityAdd.Items.Add(new ComboBoxItem { Content = "Low" });
            PriorityAdd.Items.Add(new ComboBoxItem { Content = "Medium" });
            PriorityAdd.Items.Add(new ComboBoxItem { Content = "High" });
        }
        private void AddTaskButton_Click(object sender, RoutedEventArgs e)
        {
            var NewTask = new Task
            {
                Title = TitleAdd.Text,
                Description = DescriptionAdd.Text,
                DueDate = DateAdd.SelectedDate ?? DateTime.Now,
                Priority = (PriorityAdd.SelectedItem as ComboBoxItem)?.Content.ToString(),
                IsCompleted = false,
            };

            Tasks.Add(NewTask);

            TitleAdd.Clear();
            DescriptionAdd.Clear();
            DateAdd.SelectedDate = null;
            PriorityAdd.SelectedIndex = -1;
        }
    }
    public class Task
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public string Priority { get; set; }
        public bool IsCompleted { get; set; }
        
    }

}