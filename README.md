# FE-boilerplate-2
A simple boilerplate for Front-end web development, powered by Sass and Flexbox.

## Configuration
Configuration is possible (and recommended) through "_variables.scss" file located under "scss/abstracts/" directory. Besides variables that contain settings for fonts, color, default margin and padding values, you will find also variables for image and font path. Besides these variables, you will find variables that are related to the grid system, so you can change settings like a number of columns, gap and break points.

## Container
There are two main containers in use: ```.container``` (which has fixed width) and ```.container-fluid``` (which has 100% of parent's width). If you want to have several breakpoints on known screen resolutions (widths) you will use ```.container```. It is handy when you want to be in control of elements dimensions, aspect ratios, etc. If you want to always have 100% of parent's width occupied you will use ```.container-fluid```.

## Grid system
The grid consists of a row, columns and gaps.

### Row
The row is a mandatory element which wraps columns. The row is defined with class ```.row``` and it can be extended with several classes which will give different settings to the whole row and its children:

  - ```.row-reverse``` - reorder children inside a row
  - ```.row-start``` - align items to the beginning (left)
  - ```.row-center``` - align items to the center
  - ```.row-end``` - align items to the end (right)
  - ```.row-top``` - align items to the top
  - ```.row-middle``` - align items to the middle
  - ```.row-bottom``` - align items to the bottom
  - ```.row-stretch``` - force items to have the same height
  - ```.row-between``` - make equal space/distance between the elements

### Column
A column is a basic unit that forms a grid. FE-boilerplate-2 uses 12-columns grid, although it can be changed through configuration file (look for ```$grid-columns in``` "_variables.scss"). The column can be defined with a different set of classes which will be "active" on certain breakpoint (width of the screen), so you can chain classes in order to have different behavior on different screen width. The default set of classes are the ones with "-lg". Saying that FE-boilerplate-2 is NOT based on mobile-first approach, but on desktop-first. That means that we always use a desktop as a starting point and then optimize down to small devices (mobile). So, column (element) will be always defined as, for example, ```.col-lg-5```. That means that given column will occupy 5/12 of parent's width. If you want this element to occupy, let say 8/12 on mobile, you will use ```.col-lg-5 col-xs-8```. In this way, you are in control of each element on each screen size.

If you don't want to use defined widths of elements, you can use col-auto that will distribute widths of all elements equal to the parent's width.

When you want to use offset, there are the same set of classes that define how much element will be offset. For example, the element with class ```.col-lg-4 col-lg-offset-2``` will have (on a large screen) width of 4/12 and it will have left margin 2/12. If you want to redefine this on, for example, the tablet you will use ```.col-lg-4 col-lg-offset-2 col-sm-offset-3```. This means that element will change its left margin on tablet and instead of 2/12 it will become 3/12.

### Gap
The gap is a space between two columns. Each column has half of total space between columns on its left and right, so two columns create a gap that is defined in "_variables.scss" where you can adjust gap size if needed. Variable in charge for that is ```$grid-column-gutter```.

## Mixins
FE-boilerplate-2 comes with a collection of Sass mixins that are often used and needed in order to follow DRY principle.