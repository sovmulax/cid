<script setup>
import pb from '../../pocket.config.js';
// collect data from pocketbase
try {
  records = await pb.collection('projects').getFullList();
} catch (error) {}

function addTextInput() {
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control'; // Set the desired CSS class
  // Append the input element to the container
  const container = document.getElementById('textInputContainer');
  container.appendChild(input);
}
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header> Ajout de Projet </template>
    <template #content>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <form action="#" class="custom-validation">
                <div class="form-group">
                  <label>Intitulé du Projet</label>
                  <div>
                    <input type="text" class="form-control" required placeholder="Min 6 chars." />
                  </div>
                </div>
                <div class="form-group">
                  <label>Domaine</label>
                  <div>
                    <select name="" class="form-control">
                      <option value="" selected>Selectionné une valeur</option>
                      <option value="">test</option>
                      <option value="">test</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label>Sous Domaine</label>
                  <div>
                    <select name="" class="form-control">
                      <option value="" selected>Selectionné une valeur</option>
                      <option value="">test</option>
                      <option value="">test</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <h5>Liste des Membres</h5>
                    <div class="row">
                      <div class="col-6">
                        <input type="text" class="form-control" required placeholder="Min 6 chars." />
                      </div>
                      <div class="col-6">
                        <input type="text" class="form-control" required placeholder="Min 6 chars." />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div class="form-group mb-0">
                  <div>
                    <button type="submit" class="btn btn-primary waves-effect waves-light mr-1">Submit</button>
                    <button type="reset" class="btn btn-secondary waves-effect">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
