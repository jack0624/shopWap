// 包装函数
module.exports = function(grunt) {
  
  //申明变量
  var all_js = {
                'build/indexmin.js': ['js/jquery.Slider.js','js/jquery.touchSlider.js']
              }
  // 任务配置,所有插件的配置信息
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // uglify插件的配置信息
    uglify: {
        options: {
          banner: '/*! This is uglify test - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */',
          beautify: true,//是否压缩
          mangle: false, //不混淆变量名
          compress:true,//打开或关闭使用默认选项源压缩。 
          preserveComments: 'all', //不删除注释
        },
        app_task: {
            files: all_js,
        }
    },
    //css压缩
    stylus:{
        build: {
            options: {
                linenos: false,
                compress: false,
                banner: '\/** \n * <%= pkg.name %> - <%= pkg.description %>\n * version <%= pkg.version %> \n * author <%= pkg.author %> \n * date <%= grunt.template.today() %> \n**/\n'
            },
            files: [{
                'css/common.css': 'styl/historyDetail.styl'
            }]
        }
    },
    watch: {
          default: {
              files: ['js/**/*.js','styl/**/*.styl'],
              tasks: ['default'],
              options: {
                spawn: false,
              },
          },
          dev:{
              files: ['js/**/*.js','styl/**/*.styl'],
              tasks: ["dev"],
              options: {
                spawn: false,
              },
          }
        }
  });
 
  // 告诉grunt我们将使用插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 告诉grunt当我们在终端中输入grunt时需要做些什么
  grunt.registerTask('default', ['uglify','watch']);
 
};