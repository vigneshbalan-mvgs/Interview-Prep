public class InsertionSortVisualizer extends SortingVisualizer {

    @Override
    protected void sort() {
        for (int i = 1; i < array.length; i++) {
            int key = array[i];
            int j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
                repaint();
                sleep();
            }
            array[j + 1] = key;
            repaint();
            sleep();
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Insertion Sort Visualization");
        InsertionSortVisualizer visualizer = new InsertionSortVisualizer();
        frame.add(visualizer);
        frame.pack();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
}

