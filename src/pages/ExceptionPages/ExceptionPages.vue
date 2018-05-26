<template>
  <div className="page4-page">
        <BasicNotFound />
        <BasicException />
        <EmptyContent />
        <NotPermission />
        <!--<BasicException1 />-->
      </div>
</template>

<script>
import BasicNotFound from './components/BasicNotFound';
import BasicException from './components/BasicException';
import EmptyContent from './components/EmptyContent';
import NotPermission from './components/NotPermission';
//import BasicException1 from './components/BasicException1';

export default {
  name: 'Page4',
  components: {
    BasicNotFound,
    BasicException,
    EmptyContent,
    NotPermission,
//    BasicException1,
  },
};
</script>
