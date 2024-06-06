public class SelectionSortVisualizer extends SortingVisualizer {

    @Override
    protected void sort() {
        for (int i = 0; i < array.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < array.length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            swap(i, minIndex);
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Selection Sort Visualization");
        SelectionSortVisualizer visualizer = new SelectionSortVisualizer();
        frame.add(visualizer);
        frame.pack();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
}

