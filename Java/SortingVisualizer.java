import javax.swing.*;
import java.awt.*;
import java.util.Random;

public abstract class SortingVisualizer extends JPanel {
    protected int width = 800;
    protected int height = 600;
    protected int numBars;
    protected int[] array;
    protected int barWidth;

    public SortingVisualizer(int numBars) {
        this.numBars = numBars;
        this.array = new int[numBars];
        this.barWidth = width / numBars;
        setPreferredSize(new Dimension(width, height));
        setBackground(Color.BLACK);
        initializeArray();
        new Thread(this::sort).start();
    }

    private void initializeArray() {
        Random random = new Random();
        for (int i = 0; i < numBars; i++) {
            array[i] = random.nextInt(height - 50) + 50;
        }
    }

    protected abstract void sort();

    protected void swap(int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        repaint();
        sleep();
    }

    protected void sleep() {
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Random random = new Random();
        for (int i = 0; i < array.length; i++) {
            Color color = new Color(random.nextInt(256), random.nextInt(256), random.nextInt(256));
            g.setColor(color);
            g.fillRect(i * barWidth, height - array[i], barWidth - 2, array[i]);
        }
    }
}

