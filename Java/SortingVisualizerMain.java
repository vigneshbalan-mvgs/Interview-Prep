import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SortingVisualizerMain extends JFrame {
    private JTextField arraySizeField;

    public SortingVisualizerMain() {
        setTitle("Sorting Algorithms Visualization");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(7, 1, 10, 10));
        add(panel, BorderLayout.CENTER);

        arraySizeField = new JTextField("50");
        panel.add(new JLabel("Enter Array Size:"));
        panel.add(arraySizeField);

        addButton(panel, "Bubble Sort", BubbleSortVisualizer.class);
        addButton(panel, "Selection Sort", SelectionSortVisualizer.class);
        addButton(panel, "Insertion Sort", InsertionSortVisualizer.class);
        addButton(panel, "Merge Sort", MergeSortVisualizer.class);
        addButton(panel, "Quick Sort", QuickSortVisualizer.class);

        JButton exitButton = new JButton("Exit");
        exitButton.addActionListener(e -> System.exit(0));
        panel.add(exitButton);
    }

    private void addButton(JPanel panel, String name, Class<? extends SortingVisualizer> clazz) {
        JButton button = new JButton(name);
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int arraySize = Integer.parseInt(arraySizeField.getText());
                showSortingVisualizer(clazz, arraySize);
            }
        });
        panel.add(button);
    }

    private void showSortingVisualizer(Class<? extends SortingVisualizer> clazz, int arraySize) {
        try {
            SortingVisualizer visualizer = clazz.getDeclaredConstructor(int.class).newInstance(arraySize);
            JFrame frame = new JFrame(clazz.getSimpleName());
            frame.add(visualizer);
            frame.pack();
            frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            SortingVisualizerMain main = new SortingVisualizerMain();
            main.setVisible(true);
        });
    }
}

