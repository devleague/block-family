# Block Family

### Set up:

1.  Run gulp. This project uses the [Gulp + Livereload + Sass Project](https://gist.github.com/kellishouts/2c7cde625491ad53fb3c) boilerplate, however all of this should already be set up for you.

2.  Check that Livereload is running.

3.  Check that sass is compiling. (set a variable, use the variable, then check if gulp compiles to a proper css file)

---

### Media Queries/Sass Block Family Exercise:

#### Level 1: Intro to Responsive Layouts
Level 1 introduces media queries and scss structure. Recreate the stylesheet for the following responsive layout using sass variables, inline media queries, and a mixin for the font. DO NOT cheat by inspecting the CSS file!!! [Sassy Blocks Demo](http://gomagames.com/blocks/blocks_sassy.html)

1. First, import the reset files:
- partials/reset
- partials/clearfix

2. At minimum, define variables for:

- globally used dark color
- globally used light color
- globally used bright color
- globally used padding

3. Make sure your stylesheet uses a mobile-first approach.

- Define all global styles (if any)
- then override the global styles with "medium and up" styles
- then override the medium and up" styles with "large and up" styles.

Media Query Ranges:

- Your Medium Media Query Range should apply for screen sizes with a minimum width of 600px.
- Your Large Media Query Range should apply for screen sizes with a minimum width of 900px.

Note that these ranges are **NOT STANDARD**, and proper ranges depend on the project, devices you are developing for, etc.

4. Define a mixin for your font, and include it where appropriate:

```
@mixin block_font($block_font_size: 25px, $block_font_color: $dark){
  font-size: $block_font_size;
  color: $block_font_color;
}
```

#### Level 2: Modular Layout

Now enhance the sassy blocks with a [Modular Grid](http://gomagames.com/blocks/blocks_sassy_modular.html). Do it without a framework like foundation or bootstrap.

#### Level 3: nth-child styling

See if you can do some [nth-child styling](http://gomagames.com/blocks/blocks_sassy_modular_nth.html) for fun.