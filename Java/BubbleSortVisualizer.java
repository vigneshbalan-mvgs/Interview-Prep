public class BubbleSortVisualizer extends SortingVisualizer {

    @Override
    protected void sort() {
        for (int i = 0; i < array.length - 1; i++) {
            for (int j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Bubble Sort Visualization");
        BubbleSortVisualizer visualizer = new BubbleSortVisualizer();
        frame.add(visualizer);
        frame.pack();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
}

