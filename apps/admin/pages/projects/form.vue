<script setup>
import { ref } from 'vue';
import pb from '../../pocket.config.js';

const intitule = ref('');
const domaine = ref('');
const subdomaine = ref('');
const start = ref('');
const end = ref('');

// collect data from pocketbase
try {
  records = await pb.collection('projects').getFullList();
} catch (error) {}

let i = 1;

function ajouterLigne() {
  const doc = document.getElementById('inputContainer');

  const row1 = document.createElement('div');
  row1.className = 'col-4';

  const row2 = document.createElement('div');
  row2.className = 'col-4';

  const row3 = document.createElement('div');
  row3.className = 'col-4';

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'member' + i.toString();
  input.className = 'form-control mb-2';

  const input0 = document.createElement('input');
  input0.type = 'text';
  input0.name = 'task' + i.toString();
  input0.className = 'form-control mb-2';

  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.name = 'role' + i.toString();
  input1.className = 'form-control mb-2';

  doc.appendChild(row1);
  doc.appendChild(row2);
  doc.appendChild(row3);
  row1.appendChild(input);
  row2.appendChild(input0);
  row3.appendChild(input1);
  i += 1;
}

async function submitdata() {
  const formData = new FormData();
  formData.append('title', intitule.value);
  formData.append('domain', domaine.value);
  formData.append('subDomain', subdomaine.value);
  formData.append('startDate', start.value);
  formData.append('endDate', end.value);

  const record = await pb.collection('projects').create(formData);

  for (let j = 0; j < i; j++) {
    const member = document.getElementsByName('member' + j.toString())[0].value;
    const task = document.getElementsByName('task' + j.toString())[0].value;
    const roles = document.getElementsByName('role' + j.toString())[0].value;

    const memberdata = {
      projectId: record['id'],
      role: roles,
      name: member,
    };
    const recordmember = await pb.collection('project_members').create(memberdata);

    const taskdata = {
      title: task,
      status: '1',
      projectId: record['id'],
      projectMembersId: recordmember['id'],
      name: member,
    };
    await pb.collection('project_tasks').create(taskdata);
  }

  navigateTo('/projects');
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
              <div class="custom-validation">
                <div class="form-group">
                  <label>Intitulé du Projet</label>
                  <div>
                    <input v-model="intitule" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label>Domaine</label>
                  <div>
                    <input v-model="domaine" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label>Sous-Domaine</label>
                  <div>
                    <input v-model="subdomaine" type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="col-6 form-group">
                      <label>Date de Début</label>
                      <input v-model="start" type="date" class="form-control" />
                    </div>
                    <div class="col-6 form-group">
                      <label>Date de Fin</label>
                      <input v-model="end" type="date" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <h5>Liste des Membres</h5>
                    <div id="inputContainer" class="row">
                      <div class="col-4">
                        <label for="tach">Membre</label>
                        <input
                          name="member0"
                          type="text"
                          class="form-control mb-2"
                          required
                          placeholder="Nom de l'exécutant"
                        />
                      </div>
                      <div class="col-4">
                        <label for="tach">Role</label>
                        <input
                          name="role0"
                          type="text"
                          class="form-control mb-2"
                          required
                          placeholder="Intitulé de la tâche"
                        />
                      </div>
                      <div class="col-4">
                        <label for="tach">Tache</label>
                        <input
                          name="task0"
                          type="text"
                          class="form-control mb-2"
                          required
                          placeholder="Intitulé de la tâche"
                        />
                      </div>
                    </div>
                    <br />
                    <button class="btn btn-warning waves-effect" @click="ajouterLigne">Ajouter une Tâche</button>
                  </div>
                </div>
                <br />
                <div class="form-group mb-0">
                  <div>
                    <button type="submit" class="btn btn-primary waves-effect waves-light mr-1" @click="submitdata">
                      Submit
                    </button>
                    <button type="reset" class="btn btn-secondary waves-effect">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
